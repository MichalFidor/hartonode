import * as jsesc from 'jsesc'
import { request } from './type/request';

class Parser {

  public harToNode(har: any) {
    const prettyJson = this.harToPrettyJson(har);
    return parser.toNode(prettyJson)
  }

  public harToPrettyJson(har: any) {
    if (typeof har === 'string') {
      har = JSON.parse(har);
    }

    if (!har || typeof har !== 'object') {
      return;
    }

    if (har.request) {
      return this.fromEntry(har);
    }

    if (har.log && Array.isArray(har.log.entries)) {
      return this.fromLog(har.log);
    }

    if (Array.isArray(har)) {
      return this.fromEntries(har);
    }

    if (Array.isArray(har.entries)) {
      return this.fromLog(har);
    }
  }

  public toNode(request: request[]) {

    var nodeCode = 'import * as request from \'request\';\n\n'

    for (let j = 0; j < request.length; j++) {

      if (j === 0) {
        var apiUrl = this.matchUrl(request[j].url, 1);
        nodeCode += `let apiUrl = '${apiUrl}'\n\n`
      } else if (j !== 0) {

        var first = this.matchUrl(request[j].url, 1).toString()
        var second = this.matchUrl(request[j - 1].url, 1).toString()

        if (first !== second) {
          apiUrl = this.matchUrl(request[j].url, 1);
          nodeCode += '/*------> apiUrl has changed!!! <------\n\n !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n\n ------> apiUrl has changed!!! <------*/\n\n'
          nodeCode += `apiUrl = '${apiUrl}'\n\n`
        }
      }

      nodeCode += `function request${j}_${request[j].method}() {\n    const HEADERS = {\n`
      nodeCode += this.getHeaders(request[j]);

      if (request[j].data) {
        // escape single quotes if there are any in there
        if (request[j].data.indexOf("'") > -1) {
          request[j].data = jsesc(request[j].data)
        }
        nodeCode += `    const DATA = \'${request[j].data}\';\n\n`
      }

      nodeCode += '    const OPTIONS = {\n'
      nodeCode += `        url: \`\$\{apiUrl\}${this.matchUrl(request[j].url, 3)}\`,\n`
      nodeCode += `        method: \'${request[j].method}\'`

      if (request[j].headers || request[j].cookies) {
        nodeCode += ',\n'
        nodeCode += '        headers: HEADERS'
      }
      if (request[j].data) {
        nodeCode += ',\n        body: DATA'
      }

      nodeCode += '\n    };\n\n '
      nodeCode += `   return request(OPTIONS, callback); \n};\n\n`
    }

    nodeCode += 'function callback(error: boolean, response: any, body: any) {\n'
    nodeCode += '    if (!error && response.statusCode == 200) {\n'
    nodeCode += '        console.log(body);\n'
    nodeCode += '    }\n'
    nodeCode += '}\n\n'


    return nodeCode + '\n'
  }

  private getHeaders(request) {
    var nodeCode = ''
    if (request.headers || request.cookies) {
      var headerCount = Object.keys(request.headers).length

      var i = 0
      for (var headerName in request.headers) {
        if (headerName === 'Content-Length') {
          nodeCode += `        // \'${headerName}\': \"${request.headers[headerName]}\"`
        } else {
          nodeCode += `        \'${headerName}\': \"${request.headers[headerName]}\"`
        }
        if (i < headerCount - 1 || request.cookies) {
          nodeCode += ',\n'
        } else {
          nodeCode += '\n'
        }
        i++
      }
      console.log(request.headers)
      if (request.cookies) {
        nodeCode += `        \'Cookie\': \"${request.cookies}\"\n`
      }
      nodeCode += '    };\n\n'
    }
    return nodeCode

  }

  private matchUrl(url: any, group?: number) {
    const PATTERN_WITH_HTTP = /(https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6})(\/.+)/gm;
    const PATTERN_WITHOUT_HTTP = /([-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6})(\/.+)/gm;
    var urlMatched;

    if (url.match(PATTERN_WITH_HTTP)) {
      urlMatched = PATTERN_WITH_HTTP.exec(url)[group]
      return urlMatched;
    }

    urlMatched = PATTERN_WITHOUT_HTTP.exec(url)[group]
    return urlMatched;
  }

  private fromLog(log: any) {
    if (!log || !Array.isArray(log.entries)) {
      return;
    }

    return this.fromEntries(log.entries);
  }

  private fromEntries(entries: any) {
    return entries.map(this.fromEntry);
  }

  private fromEntry(entry: any) {

    if (!entry || !entry.request) {
      return '';
    }

    // Define new object for further work
    var command = {
      method: '',
      cookies: [],
      headers: [],
      data: '',
      url: '',
    }

    command.method = entry.request.method.toUpperCase();

    if (entry.request.cookies.length) {
      entry.request.cookies.map((cookie: { name: string | number | boolean; value: string | number | boolean; }) =>
        command.cookies[encodeURIComponent(cookie.name)] = encodeURIComponent(cookie.value)
      );
    } else {
      delete command.cookies;
    }

    entry.request.headers.map((header: { name: string | number; value: any; }) =>
      command.headers[header.name] = header.value
    );

    if (entry.request.postData) {
      command.data = entry.request.postData.text;
    } else {
      delete command.data;
    }

    command.url = entry.request.url;
    return command;
  }
}

const parser = new Parser();
export default parser;