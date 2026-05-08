import 'dotenv/config'
import {config as baseConfig} from './wdio.conf.js'

export const config = {
...baseConfig,
services: ['browserstack'],
user: process.env.browserstack_user,
key: process.env.browserstack_key,
hostname: 'hub.browserstack.com',
protocol: 'https',
port: 443,
path: '/wd/hub',
specs: [
        '../specs/android/E2Eflow5.spec.js'
    ],
capabilities: [
           {
    //     // capabilities for local Appium web tests on an Android Emulator
        platformName: 'Android',
    
        'appium:deviceName': 'Samsung Galaxy S22 Ultra',
        'appium:platformVersion': '12.0',
        'appium:app': 'bs://8a49ee74326c14fe1573ec170689722c0bee468b',
    //    'appium:appActivity':'com.swaglabsmobileapp.MainActivity', 
        'appium:automationName': 'UiAutomator2'
       }
]

}