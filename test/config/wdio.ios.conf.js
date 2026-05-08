import path from 'path';
import {config as baseConfig} from './wdio.conf.js'

export const config = {
...baseConfig,
specs: [
        '../specs/iOS/iOSAlerts2.spec.js'
    ],
capabilities: [
        {
        // capabilities for local Appium web tests on an Android Emulator
        platformName: 'iOS',
        'appium:deviceName': 'iPhone 17 Pro',
        'appium:platformVersion': '26.4.1',
        'appium:app': path.join(process.cwd(), 'apps/iOS/iOS.Simulator.SauceLabs.Mobile.Sample.app.2.7.1.app'),
        'appium:automationName': 'XCUITest',
        'appium:noReset': true,
        'appium:udid': 'ED123CE6-40C6-4526-A15A-E182FE263014'
       }
],
afterTest: async function(test, context, result) {
if (!result.passed) {
    const timestamp = Date.now();
    await browser.saveScreenshot(`./errorShots/${test.title}_${timestamp}.png`);
}
}
}