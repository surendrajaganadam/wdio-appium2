class LoginPage {

 get inputUsername() {
 return $('//android.widget.EditText[@content-desc="test-Username"]')
 }

 get inputPassword() {
 return $('//android.widget.EditText[@content-desc="test-Password"]')
 }

 get loginButton() {
 return $('//android.view.ViewGroup[@content-desc="test-LOGIN"]')
 }

 async loginToApplication(){
 await this.inputUsername.setValue('standard_user')
 await this.inputPassword.setValue('secret_sauce')
 await this.loginButton.click()
 await browser.pause(5000)
 }
}

export default new LoginPage()