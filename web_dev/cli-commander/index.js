const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('Counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count_letter')
  .description('Count the number of letters in the file.')
  .argument('<file>', 'File to count the number of letters')
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if (err) {
          console.log("Failed to read the file")
        } else {
          const letters = data.split("").length;
          console.log(`There are ${letters} letters in the ${file}`);
        }
    })
  });

program.command('count')
  .description('Count the number of word in the file.')
  .argument('<file>', 'File to count the number of words')
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
          console.log("Failed to read the file")
      } else {
          const words = data.split(" ").length;
          console.log(`There are ${words} words in the ${file}`);
      }
    })
  });

program.command('count_lines')
  .description('Count the number of lines in the file.')
  .argument('<file>', 'File to count the number of lines')
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
          console.log("Failed to read the file")
      } else {
          const lines = data.split("\n").length;
          console.log(`There are ${lines} lines in the ${file}`);
      }
    })
  });

program.parse();
