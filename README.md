# Language Detect Exec

Automatically execute a file in a known programming language based on [language-command](https://github.com/blakeembrey/node-language-command).

## Installation

```
npm install language-detect-exec --save
```

## Usage

```javascript
var exec = require('language-detect-exec');

exec('test.js', function (err, stdout, stderr) {
  console.log(stdout);
});
```

## License

MIT
