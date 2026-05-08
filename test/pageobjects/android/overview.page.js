class PlaceOrder{
get finishButton() {
return $('//android.widget.TextView[@text="FINISH"]')
}

get backToHomeButton() {
return $('//android.widget.TextView[@text="BACK HOME"]')
}

async placeOrderForm() {
await this.finishButton.click()
await browser.pause(2000)
await this.backToHomeButton.click()
await browser.pause(2000)
}

}

export default new PlaceOrder()