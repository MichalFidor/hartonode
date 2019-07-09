import parser from './lib/parser';
import * as fs from 'fs';
import * as path from 'path';

function selectFile(fileToUpload: string): Buffer{
    return fs.readFileSync(path.resolve(__dirname, fileToUpload));
}

const har = selectFile('./file.har').toString('utf-8')
const filepath = "./output/requests.ts";
const nodeRequests = parser.harToNode(har)

fs.writeFile(filepath, nodeRequests, (err) => {
    if (err) throw err;

    console.log("The file was succesfully saved!");
}); 
