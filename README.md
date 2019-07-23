# HAR to Node.js
It's a simple Node.js module that converts a requests to functions.

# Installation 
```sh
$ npm install --save hartonode
```

# Usage
You can use it on three different ways.

1. Use it to print output on the console or assign it to a variable

    Import as a module
    ```js
    var htn = require('hartonode');
    ```
    and then use it as
    ```js
    htn.harToNode('<harfile>');
    ```

2. Generate a har file through your project. 

    After import use function
    ```js
    htn.harToNodeToFile('<harfile>')
    ```
    Output will be the file named as `requests.ts` and saved on the same folder

3. Generate a har file through console

    In the console provide `har-to-node <file_path>`. Output from this is the same as in the 2nd point.
