import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET() {
  const snapshotPath = path.join(process.cwd(), "tmp-lilac.html");
  const html = await readFile(snapshotPath, "utf8");

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}
