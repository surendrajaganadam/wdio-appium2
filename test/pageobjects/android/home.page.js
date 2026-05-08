class HomePage {
get addToCartBtn() {
 return $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]')
}

get cartLogo() {
return $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView')
}

get sideMenuBar() {
return $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView')
}

get logoutButton() {
return $('//android.view.ViewGroup[@content-desc="test-LOGOUT"]')
}


async addProductToCart(){
await this.addToCartBtn.click()
await this.cartLogo.click()
await browser.pause(2000)
}

async logoutFromApplication(){
await this.sideMenuBar.click()
await this.logoutButton.click()
await browser.pause(2000)
}

}

export default new HomePage()