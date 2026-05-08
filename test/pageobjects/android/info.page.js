class InformationPage {

get firstNameFeild() {
return $('//android.widget.EditText[@content-desc="test-First Name"]')
}

get lastNameFeild() {
return $('//android.widget.EditText[@content-desc="test-Last Name"]')

}

get postalCodeField(){
return $('//android.widget.EditText[@content-desc="test-Zip/Postal Code"]')
}

get continueButton() {
return $('//android.widget.TextView[@text="CONTINUE"]')
}

async fillInformationForm(){
await this.firstNameFeild.setValue('1234')
await this.lastNameFeild.setValue('1234')
await this.postalCodeField.setValue('123')
await this.continueButton.click()
await browser.pause(2000)
}

async scrollToEndOfPage(){
 await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
}

}

export default new InformationPage()