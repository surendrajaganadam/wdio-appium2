import iOSLoginPage from '../../pageobjects/iOS/iOSLoginPage'
import iOSHomePage from '../../pageobjects/iOS/iOSHomePage'
import iOSCartPage from '../../pageobjects/iOS/iOSCartPage'
import iOSInfoPage from '../../pageobjects/iOS/iOSInfoPage.js';
import iOSOverviewPage from '../../pageobjects/iOS/iOSOverviewPage.js';

describe('E2E Scenario 2', () => {

 it('Scenario 2', async () => {
     await iOSLoginPage.loginToApplication()
     await iOSHomePage.addProductToCart()
     await iOSCartPage.checkOutOperation()
     await iOSInfoPage.fillTheForm()
     await iOSOverviewPage.placeOrder()
     await iOSHomePage.logoutFromApp()

 });

 });

 