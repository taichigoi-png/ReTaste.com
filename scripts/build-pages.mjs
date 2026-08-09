import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const routes = ["/", "/shop", "/coming-soon", "/contact", "/contact/thanks"];
const outputDirectory = "pages-dist";
const basePath = "/ReTaste.com";
const pagesUrl = "https://taichigoi-png.github.io/ReTaste.com";

await rm(outputDirectory, { force: true, recursive: true });
await mkdir(outputDirectory, { recursive: true });
await cp("dist/client", outputDirectory, { recursive: true });

const workerUrl = pathToFileURL(join(process.cwd(), "dist/server/index.js"));
workerUrl.searchParams.set("pages-export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

for (const route of routes) {
  const response = await worker.fetch(
    new Request(`https://re-taste.pages.dev${route}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
    },
    { passThroughOnException() {}, waitUntil() {} },
  );

  if (!response.ok) {
    throw new Error(`Could not export ${route}: ${response.status}`);
  }

  const html = (await response.text())
    .replace(/(["'])\/(?!\/)/g, `$1${basePath}/`)
    .replace(/\\(["'])\/(?!\/)/g, `\\$1${basePath}/`)
    .replaceAll("https://re-taste-mikan-rusk.jdrsk.chatgpt.site/contact/thanks", `${pagesUrl}/contact/thanks`)
    .replaceAll("https://re-taste.pages.dev", pagesUrl);
  const outputPath = route === "/" ? "index.html" : `${route.slice(1)}/index.html`;
  const filePath = join(outputDirectory, outputPath);
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, html);
}

console.log(`Cloudflare Pages files created in ${outputDirectory}`);
