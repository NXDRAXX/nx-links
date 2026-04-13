const fs = require("fs");

function main() {
  const [, , filePath, expectedName, sourceId] = process.argv;

  if (!filePath || !expectedName || !sourceId) {
    throw new Error("Usage: node src/tools/validate-json.js <filePath> <expectedName> <sourceId>");
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const data = JSON.parse(raw);

  if (!data || data.name !== expectedName || !Array.isArray(data.downloads) || data.downloads.length === 0) {
    throw new Error(`Invalid JSON for ${sourceId}`);
  }

  console.log(`${sourceId} entries: ${data.downloads.length}`);
}

main();
