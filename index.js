"use strict";
exports.__esModule = true;
var parser_1 = require("./lib/parser");
var fs = require("fs");
var path = require("path");
function selectFile(fileToUpload) {
    return fs.readFileSync(path.resolve(__dirname, fileToUpload));
}
var har = selectFile('./file.har').toString('utf-8');
var filepath = "./output/requests.ts";
var nodeRequests = parser_1["default"].harToNode(har);
fs.writeFile(filepath, nodeRequests, function (err) {
    if (err)
        throw err;
    console.log("The file was succesfully saved!");
});
