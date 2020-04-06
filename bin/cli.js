#!/usr/bin/env node

var hrn = require('../index');
var path = require('path');
const argv = require('yargs').argv;

if (argv.h || argv.help)
return help();

// outputs the help menu
function help() {
    console.log(`usage: har-to-node [<file path>]
  file path:
  \t Provide a <file path> for your HAR file. 
  \t If no <file path> is passes, the script won't be able to convert your HAR file`)
}

const file = process.argv[2]
try {
    let fileTwo = path.join(process.cwd(), `${file}`)

    const FILE = hrn.selectFile(`${fileTwo}`)
    hrn.harToNodeToFile(FILE)
} catch (err) {
    if (file === undefined) {
        console.log('Provide a path for your file. For help type har-to-node -h')
    }
}

