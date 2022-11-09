const Mustache = require("mustache");
const fs = require("fs");
const writeFile = require("fs");

const report = fs.readFileSync("template.mustache", "utf8");

var data = {
  person: {
    name: "John Doe",
    age: "38",
  },
};

var output = Mustache.render(report, data);
writeFile.writeFileSync(`output.html`, output, (err) => {
  if (err) throw err;
});
