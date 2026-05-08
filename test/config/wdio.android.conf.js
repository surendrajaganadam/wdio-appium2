import path from 'path';
import {config as baseConfig} from './wdio/conf.js'

export const config = {
...baseConfig,
specs: [
        '../specs/android/E2Eflow4.spec.js'
    ],
capabilities: [
           {
    //     // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
    
        'appium:deviceName': 'R9ZR80BT7LB',
        'appium:platformVersion': '13',
        'appium:app': path.join(process.cwd(), 'apps/Android-NativeDemoApp-0.4.0.apk'),
       'appium:appActivity':'com.wdiodemoapp.MainActivity', 
        'appium:automationName': 'UiAutomator2'
       }
]

}