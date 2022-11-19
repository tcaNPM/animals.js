const animals = require("./lib");

(async () => {
  console.log(await animals.cat());
  console.log(await animals.cat("gif"));
  console.log(await animals.dog());
  console.log(await animals.fox());
  console.log(await animals.duc());
})();
