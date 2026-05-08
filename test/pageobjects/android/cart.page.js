class CartPage {

get checkoutButton() {
return $('//android.widget.TextView[@text="CHECKOUT"]')
}

async performCheckout(){
await this.checkoutButton.click()
await browser.pause(2000)
}


}

export default new CartPage()