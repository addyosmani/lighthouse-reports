const assert = require('assert');
const lighthouseReporter = require('./index');

it('should return a valid time-to-interactive score from the report', () => {
  return lighthouseReporter('https://airhorner.com')
      .then(data => {
        return data.audits['time-to-interactive'].rawValue
    }).then(score => {
        assert(score < 5000);
    });
}).timeout(40000);
