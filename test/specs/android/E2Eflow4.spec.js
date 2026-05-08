import LoginPage from '../pageobjects/login.page.js'
import HomePage from '../pageobjects/home.page.js';
import CartPage from '../pageobjects/cart.page.js';
import InformationPage from '../pageobjects/info.page.js';
import PlaceOrder from '../pageobjects/overview.page.js';

describe('Swaglabs Order placing flow 2', () => {

 it('Swaglabs e2e scenario 111', async () => {
  await LoginPage.loginToApplication()
  await HomePage.addProductToCart()
  await CartPage.performCheckout()
  await InformationPage.fillInformationForm()
  await InformationPage.scrollToEndOfPage()
  await PlaceOrder.placeOrderForm()
   

  await HomePage.logoutFromApplication()

   
 });

 });