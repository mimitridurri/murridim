// Importieren Sie die Chalk-Bibliothek
// Verwenden Sie diese Syntax für ESM (ECMAScript Module)
import chalk from 'chalk';


import os from 'os';

// Sie können dann auf die os-Methoden zugreifen, z.B.:
const totalMemory = os.totalmem();
const freeMemory = os.freemem();


// Formatierte Ausgabe mit Chalk
console.log(chalk.green(`Total Memory: ${totalMemory}`));
console.log(chalk.blue(`Free Memory: ${freeMemory}`));


// Einfache farbige Ausgabe
console.log(chalk.blue('Hello world in blue!'));

// Kombinierte Stile
console.log(chalk.blue.bgRed.bold('Hello world in bold blue with a red background!'));

// Verschachtelte Stile
console.log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));



// Bedingte Farbgebung
const log = console.log;
const error = chalk.bold.red;
const warning = chalk.bold.red;

log(error('Error!'));
log(warning('Warning!'));
