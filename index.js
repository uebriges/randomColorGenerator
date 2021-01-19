const randomColor = require('randomcolor');
const chalk = require('chalk');

if (!process.argv[2]) {
  drawBox();
} else if (process.argv[2] && process.argv[3]) {
  drawBox();
}

function drawBox(lines, characters) {
  !lines ? (lines = 9) : (lines = lines);
  !characters ? (characters = 31) : (characters = characters);

  let color = setColor(process.argv[2], process.argv[3]);
  let boxString = '';

  console.log(lines);
  console.log(characters);

  for (let i = 1; i <= lines; i++) {
    if (i <= 3) {
      for (let j = 1; j <= characters; j++) {
        boxString += chalk.hex(color)('#');
      }
    } else if (i > 3 && i <= 6) {
      boxString += chalk.hex(color)(`#####       ${color}      ######`);
    } else if (i > 6 && i <= 9) {
      for (let j = 1; j <= characters; j++) {
        boxString += chalk.hex(color)(`#`);
      }
    }
    boxString += '\n';
  }
  console.log(boxString);
}

function setColor(hue, luminosity) {
  !hue ? (hue = 'random') : (hue = hue);
  !luminosity ? (luminosity = 31) : (luminosity = luminosity);

  return randomColor({ luminosity: luminosity, hue: hue });
}
