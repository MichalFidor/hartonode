'use strict';
var fs = require('fs');
var path = require('path');
var expect = require('chai').expect;
var index = require('../index.js');

function selectFile(fileToUpload) {
    return fs.readFileSync(path.resolve(__dirname, fileToUpload));
}

const har = selectFile('./test.har').toString('utf-8')

describe('Har to node functions test', () => {
    it('Should comment Content-Length header', () => {
        const EXPECTED_RESULT = `    // \'Content-Length\': "123"\n};\n\n`
        const FILE = {
            headers: {
                'Content-Length': 123,
            }
        }
        const RESULT = index.getHeaders(FILE);

        expect(RESULT).to.equal(EXPECTED_RESULT);
    });
    it('Should return appropriate URLs', () => {
        const EXPECT_CLEAN_URL = 'http://some-site.com';
        const EXPECT_ENDPOINT = '/some-endpoint';
        const RESULT_CLEAN_URL = index.matchUrl('http://some-site.com/some-endpoint', 2)
        const RESULT_ENDPOINT = index.matchUrl('http://some-site.com/some-endpoint', 4)

        expect(RESULT_CLEAN_URL).to.equal(EXPECT_CLEAN_URL)
        expect(RESULT_ENDPOINT).to.equal(EXPECT_ENDPOINT)
    });
    it('Should return appropriate output', () => {
        const EXPECTED_OUTPUT = 'import * as request from \'sync-request\';\n\nlet apiUrl = \'https://www.some-site.com\'\n\nlet HEADERS = {\n    \'Host\': "www.some-site.com",\n    \'User-Agent\': "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:68.0) Gecko/20100101 Firefox/68.0",\n    \'Accept\': "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",\n    \'Accept-Language\': "en-US,en;q=0.5",\n    \'Accept-Encoding\': "gzip, deflate, br",\n    \'Connection\': "keep-alive",\n    \'Cookie\': "_ga=GA1.2.244836884.1541677301",\n    \'Upgrade-Insecure-Requests\': "1",\n    \'Pragma\': "no-cache",\n    \'Cache-Control\': "no-cache",\n};\n\nfunction request0_GET() {\n    const OPTIONS = {\n        headers: HEADERS\n    };\n\n    return request.default(\'GET\', `${apiUrl}`, OPTIONS); \n};\n\nfunction request1_POST() {\n    const ENDPOINT = \'/session\' \n    const OPTIONS = {\n        headers: HEADERS\n    };\n\n    return request.default(\'POST\', `${apiUrl}${ENDPOINT}`, OPTIONS); \n};\n\n\n'
        const ACTUAL_OUTPUT = index.harToNode(har);

        expect(ACTUAL_OUTPUT).to.equals(EXPECTED_OUTPUT)
    });
})
