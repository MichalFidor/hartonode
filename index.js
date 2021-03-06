"use strict";
/**
 * HAR to NODE: uility tool for converting a HAR file to a JS functions.
 *
 * @author Michał Fidor <michal.fidor@gmail.com>
 * @license MIT license
 * @copyright Copyright (c) 2019, Michał Fidor
 * @version 1.2.2
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const fs = require("fs");
const jsesc = require("jsesc");
const _ = require("lodash");
function harToNode(har) {
    har.toString("utf-8");
    const OBJECT = harToObject(har);
    return toNode(OBJECT);
}
exports.harToNode = harToNode;
function harToNodeToFile(har) {
    har.toString("utf-8");
    const OBJECT = harToObject(har);
    const FILE_PATH = './requests.ts';
    const OUTPUT = toNode(OBJECT);
    return fs.writeFile(FILE_PATH, OUTPUT, (err) => {
        if (err)
            throw err;
        console.log("The file was succesfully saved!");
    });
}
exports.harToNodeToFile = harToNodeToFile;
function harToObject(har) {
    har = JSON.parse(har);
    if (har.request) {
        return entry(har);
    }
    if (har.log && Array.isArray(har.log.entries)) {
        return log(har.log);
    }
    if (Array.isArray(har)) {
        return entries(har);
    }
    if (Array.isArray(har.entries)) {
        return log(har);
    }
}
exports.harToObject = harToObject;
function getHeaders(request) {
    var nodeCode = "";
    if (request.headers) {
        var headerCount = Object.keys(request.headers).length;
        var i = 0;
        for (var headerName in request.headers) {
            headerName === "Content-Length"
                ? (nodeCode += `    // \'${headerName}\': \"${request.headers[headerName]}\"`)
                : (nodeCode += `    \'${headerName}\': \"${request.headers[headerName]}\"`);
            i < headerCount - 1 || request.cookies
                ? (nodeCode += ",\n")
                : (nodeCode += "\n");
            i++;
        }
    }
    nodeCode += "};\n\n";
    return nodeCode;
}
exports.getHeaders = getHeaders;
function matchUrl(url, group) {
    const PATTERN = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
    return url.match(PATTERN)[group];
}
exports.matchUrl = matchUrl;
function log(log) {
    if (!log || !Array.isArray(log.entries)) {
        return;
    }
    return entries(log.entries);
}
function entries(entries) {
    return entries.map(entry);
}
function entry(entry) {
    if (!entry.request || !entry) {
        return "";
    }
    // Define new object for further work
    var command = {
        method: "",
        cookies: [],
        headers: [],
        data: "",
        url: ""
    };
    // Setting up a variable for Request method
    command.method = entry.request.method.toUpperCase();
    // Checking out if there are some cookies in the requests
    entry.request.cookies.length
        ? entry.request.cookies.map((cookie) => (command.cookies[encodeURIComponent(cookie.name)] = encodeURIComponent(cookie.value)))
        : delete command.cookies;
    // Setting up keys/values for headers
    entry.request.headers.map((header) => (command.headers[header.name] = header.value));
    // Setting up a data which was sent (if any, otherwise remove data from object)
    entry.request.postData
        ? (command.data = entry.request.postData.text)
        : delete command.data;
    // Setting up a full URL from request
    command.url = entry.request.url;
    return command;
}
function toNode(request) {
    var nodeCode = "import * as request from 'sync-request';\n\n";
    for (let j = 0; j < request.length; j++) {
        if (j === 0) {
            var apiUrl = matchUrl(request[j].url, 2);
            nodeCode += `let apiUrl = '${apiUrl}'\n\n`;
            nodeCode += `let HEADERS = {\n`;
            nodeCode += getHeaders(request[j]);
        }
        else if (j !== 0) {
            var previousApiUrl = matchUrl(request[j - 1].url, 2).toString();
            if (apiUrl !== previousApiUrl) {
                nodeCode +=
                    "/*------> apiUrl has changed!!! <------\n\n \n\n ------> apiUrl has changed!!! <------*/\n\n";
                nodeCode += `apiUrl = '${apiUrl}'\n\n`;
            }
            if (!_.isMatch(request[j].headers, request[j - 1].headers)) {
                nodeCode += `HEADERS = {\n ${getHeaders(request[j])}`;
            }
        }
        nodeCode += `function request${j}_${request[j].method}() {\n`;
        if (request[j].data) {
            // escape single quotes if there are any in there
            if (request[j].data.indexOf("'") > -1) {
                request[j].data = jsesc(request[j].data);
            }
            nodeCode += `    const DATA = \'${request[j].data}\';\n\n`;
        }
        const ENDPOINT = matchUrl(request[j].url, 4);
        // check if endpoint exists otherwise don't print this line
        if (ENDPOINT !== '/') {
            nodeCode += `    const ENDPOINT = '${ENDPOINT}' \n`;
        }
        nodeCode += "    const OPTIONS = {\n";
        if (request[j].headers || request[j].cookies) {
            nodeCode += "        headers: HEADERS";
        }
        if (request[j].data) {
            nodeCode += ",\n        body: DATA";
        }
        nodeCode += "\n    };\n\n ";
        ENDPOINT !== '/'
            ? (nodeCode += `   return request.default(\'${request[j].method}\', \`\$\{apiUrl\}\$\{ENDPOINT\}\`, OPTIONS); \n};\n\n`)
            : (nodeCode += `   return request.default(\'${request[j].method}\', \`\$\{apiUrl\}\`, OPTIONS); \n};\n\n`);
    }
    return nodeCode + "\n";
}
function selectFile(fileToUpload) {
    return fs.readFileSync(path.resolve(fileToUpload));
}
exports.selectFile = selectFile;
