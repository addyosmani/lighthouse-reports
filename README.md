# lighthouse-reports

Quick JSON audits from [GoogleChrome/lighthouse](https://github.com/googlechrome/lighthouse)

## Install

```
$ npm install --save lighthouse-reports
```

## Usage

```js
const lighthouseReporter = require('lighthouse-reports');

lighthouseReporter.run('https://airhorner.com')
    .then(data => {
        return data.audits; // do something with the audits
    });
```

## License

Apache 2.0 Google Inc.