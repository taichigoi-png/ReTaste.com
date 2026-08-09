import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const routes = ["/", "/shop", "/coming-soon", "/contact", "/contact/thanks"];
const outputDirectory = "pages-dist";

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

  const outputPath = route === "/" ? "index.html" : `${route.slice(1)}/index.html`;
  const filePath = join(outputDirectory, outputPath);
  await mkdir(dirname(filePath), { recursive: true });
  await writeFile(filePath, await response.text());
}

console.log(`Cloudflare Pages files created in ${outputDirectory}`);
