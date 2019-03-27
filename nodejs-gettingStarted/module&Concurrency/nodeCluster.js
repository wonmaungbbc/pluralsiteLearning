// async, await, promises function

const fs = require("fs").promises;

async function main() {
  const data = await fs.readFile(__filename);
  await fs.writeFile(__filename, data);
  //   can add more awaits here...
}

main();
console.log("Test");
