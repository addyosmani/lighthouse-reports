'use strict';
const lighthouse = require('lighthouse');
const ChromeLauncher = require('lighthouse/lighthouse-cli/chrome-launcher');
const config = require('lighthouse/lighthouse-core/config/default.json');
const Printer = require('lighthouse/lighthouse-cli/printer')

// TODO: Make all of this configurable
const flags = { mobile: true, loadPage: true }
const outputMode = 'json'
const outputPath = 'stdout'

function launchChromeAndRun(address) {
  const launcher = new ChromeLauncher({
    autoSelectChrome: !cli.selectChrome,
  });

  cleanup.register(() => launcher.kill());

  return launcher
    .isDebuggerReady()
    .catch(() => {
      console.log('Launching Chrome...');
      return launcher.run();
    })
    .then(() => lighthouseRun(address))
    .then(() => launcher.kill());
}

function lighthouseRun(address) {
  if (!address) {
    return;
  }
  return lighthouse(address, flags, config)
}

// TODO: File upstream bug to just expose this in Lighthouse itself
module.exports = url => {
    return lighthouseRun(url)
}