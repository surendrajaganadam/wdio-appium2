class SingupPage {
 
 get loginOption() {
   return $('//android.widget.TextView[@text="Login"]')
 }

 get signupButton(){
  return $('//android.widget.TextView[@text="Sign up"]')
 }

 get inputEmailAddress(){
 return $('~input-email')
 }

 get inputPassword(){
  return $('~input-password')
 }

 get inputConfirmPassword(){
 return $('~input-repeat-password')
 }

 get btnCreateAccount(){
 return $('//android.widget.TextView[@text="SIGN UP"]')
 }

 //lets add aceptalert function later
 async acceptingAlerts(){
 await browser.acceptAlert()
 }

 get loginTab(){
 return $('//android.widget.TextView[@text="Login"]')
 }

 get loginBtn(){
 return $('//android.widget.TextView[@text="LOGIN"]')
 }

 async createAccountNLogin() {
  await browser.pause(1000)
  await this.loginOption.click()
  await this.signupButton.click()
  await this.inputEmailAddress.setValue('1234@yopmail.com')
  await this.inputPassword.setValue('12345678')
  await this.inputConfirmPassword.setValue('12345678')
  await this.btnCreateAccount.click()
  await browser.pause(5000)
  await this.acceptingAlerts()
  await this.loginTab.click()
  await this.loginBtn.click()
  await browser.pause(5000)
  await this.acceptingAlerts()
  await browser.pause(5000)
  
 }


}

export default new SingupPage();