const randomColor = require('randomcolor');
const chalk = require('chalk');
const readline = require('readline-sync');

const regex = new RegExp('^\\d{1,2}x\\d{1,2}$');

if (!process.argv[2]) {
  drawBox();
} else if (process.argv[2]) {
  if (process.argv[2] === 'ask') {
    const color = readline.question('Color: ');
    const lum = readline.question('Luminosity: ');
    let colorhex = setColor(color, lum);
    drawBox(colorhex);
  } else if (regex.test(process.argv[2])) {
    if (
      process.argv[2].split('x')[0] < 9 &&
      process.argv[2].split('x')[0] < 31
    ) {
      console.log('Minium: 9x31');
    } else {
      drawBox(
        undefined,
        process.argv[2].split('x')[0],
        process.argv[2].split('x')[1],
      );
    }
  }
}

function drawBox(color, lines, characters) {
  // If no lines or characters given default -> 9x31
  !lines ? (lines = 9) : (lines = lines);
  !characters ? (characters = 31) : (characters = characters);

  // If no color given ->
  if (!color) {
    color = setColor();
  } else {
    color = color;
  }

  let boxString = '';

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
