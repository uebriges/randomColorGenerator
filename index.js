const randomColor = require('randomcolor');
const chalk = require('chalk');
const readline = require('readline-sync');

// Prints a box depending on how it is called
function drawBox(color, lines = 9, characters = 31) {
  // If no color given -> default = random
  if (!color) {
    color = randomColor({});
  }

  let boxString = '';

  if (lines % 2 === 0) {
    //  ---------------- if an even number of lines is given ----------------
    for (let i = 1; i <= lines; i++) {
      if (i <= lines / 2 - 1) {
        // ---------------- draw the top border ----------------
        boxString += chalk.hex(color)(`#`.repeat(characters));
      } else if (i > lines / 2 - 1 && i <= lines / 2 + 2) {
        // ---------------- draw the inner box + right and left border ----------------
        if (i === lines / 2) {
          if (characters % 2 === 0) {
            boxString += chalk.hex(color)(
              `#`.repeat(characters / 2 - 20 / 2) +
                '                    ' +
                '#'.repeat(characters / 2 - 20 / 2),
            );
          } else {
            boxString += chalk.hex(color)(
              `#`.repeat(characters / 2 - 20 / 2 + 1) +
                '                    ' +
                '#'.repeat(characters / 2 - 20 / 2),
            );
          }
        } else if (i === lines / 2 + 2) {
          if (characters % 2 === 0) {
            boxString += chalk.hex(color)(
              `#`.repeat(characters / 2 - 20 / 2) +
                '                    ' +
                '#'.repeat(characters / 2 - 20 / 2),
            );
          } else {
            boxString += chalk.hex(color)(
              `#`.repeat(characters / 2 - 20 / 2 + 1) +
                '                    ' +
                '#'.repeat(characters / 2 - 20 / 2),
            );
          }
        } else {
          // console.log('i: ', i);
          if (characters % 2 === 0) {
            boxString += chalk.hex(color)(
              `#`.repeat(characters / 2 - 20 / 2) +
                `      ${color}       ` +
                '#'.repeat(characters / 2 - 20 / 2),
            );
          } else {
            boxString += chalk.hex(color)(
              `#`.repeat(characters / 2 - 20 / 2 + 1) +
                `      ${color}       ` +
                '#'.repeat(characters / 2 - 20 / 2),
            );
          }
        }
      } else if (i > lines / 2 + 1) {
        // ---------------- draw the bottom border ----------------
        boxString += chalk.hex(color)(`#`.repeat(characters));
      }
      if (i < lines) {
        boxString += '\n';
      }
    }
  } else {
    // ---------------- if an uneven number of lines is given ----------------
    for (let i = 1; i <= lines; i++) {
      if (i <= Math.round(lines / 2) - 2) {
        // ---------------- draw the top border ----------------
        boxString += chalk.hex(color)(`#`.repeat(characters));
      } else if (
        // ---------------- draw the inner box + right and left border ----------------
        i >= Math.round(lines / 2) - 1 &&
        i <= Math.round(lines / 2) + 1
      ) {
        if (i === Math.round(lines / 2) - 1) {
          if (characters % 2 === 0) {
            boxString += chalk.hex(color)(
              `#`.repeat(characters / 2 - 20 / 2) +
                '                    ' +
                '#'.repeat(characters / 2 - 20 / 2),
            );
          } else {
            boxString += chalk.hex(color)(
              `#`.repeat(characters / 2 - 20 / 2 + 1) +
                '                    ' +
                '#'.repeat(characters / 2 - 20 / 2),
            );
          }
        } else if (i === Math.round(lines / 2) + 1) {
          if (characters % 2 === 0) {
            boxString += chalk.hex(color)(
              `#`.repeat(characters / 2 - 20 / 2) +
                '                    ' +
                '#'.repeat(characters / 2 - 20 / 2),
            );
          } else {
            boxString += chalk.hex(color)(
              `#`.repeat(characters / 2 - 20 / 2 + 1) +
                '                    ' +
                '#'.repeat(characters / 2 - 20 / 2),
            );
          }
        } else if (i === Math.round(lines / 2)) {
          if (characters % 2 === 0) {
            boxString += chalk.hex(color)(
              `#`.repeat(Math.round(characters / 2) - 20 / 2) +
                `      ${color}       ` +
                '#'.repeat(Math.round(characters / 2) - 20 / 2),
            );
          } else {
            boxString += chalk.hex(color)(
              `#`.repeat(Math.round(characters / 2) - 20 / 2) +
                `      ${color}       ` +
                '#'.repeat(Math.round(characters / 2) - 20 / 2 - 1),
            );
          }
        }
      } else if (i > lines / 2 + 1) {
        // ---------------- draw the bottom border ----------------
        boxString += chalk.hex(color)(`#`.repeat(characters));
      }
      if (i < lines) {
        boxString += '\n';
      }
    }
  }
  process.stdout.write(boxString);
}

// Checks if ratio is in proper format (max: 99x99; min: 9x31)
const regex = new RegExp('^\\d{1,2}x\\d{1,2}$');

// ---------------- Without any argument ----------------
// Without parameters: color is generated randomly. Lines and characters are default (9x31)
if (!process.argv[2]) {
  drawBox();
} else if (process.argv[2]) {
  //  ---------------- With argument ask ----------------
  // With parameter "color": color is generated based on user input. Lines and characters are default (9x31)
  if (process.argv[2] === 'ask') {
    const color = readline.question('Color: ');
    const lum = readline.question('Luminosity: ');
    const colorHex = randomColor({ luminosity: lum, hue: color });
    drawBox(colorHex);
    //  -------------- With box size argument (e.g. 10x30) ----------------
    // With parameters "lines" and "characters": Draws a box with the hex value placed in an "inner box".
    // The inner box stays the same size. The border adjusts.
  } else if (regex.test(process.argv[2])) {
    if (
      process.argv[2].split('x')[0] < 9 ||
      process.argv[2].split('x')[1] < 31
    ) {
      console.log('Minimum: 9x31');
    } else {
      drawBox(
        undefined,
        process.argv[2].split('x')[0],
        process.argv[2].split('x')[1],
      );
    }
  } else {
    const colorHex = randomColor({
      luminosity: process.argv[3],
      hue: process.argv[2],
    });
    drawBox(colorHex);
  }
}
