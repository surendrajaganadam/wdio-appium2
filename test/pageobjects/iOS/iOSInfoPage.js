class iOSInfoPage {
get firstNameInput() {
return $('~test-First Name')
}

get lastNameInput() {
return $('~test-Last Name')
}

get zipCodeInput() {
return $('~test-Zip/Postal Code')
}
get continueBtn() {
return $('~test-CONTINUE')
}

async fillTheForm(){
await this.firstNameInput.setValue('surendra')
await this.lastNameInput.setValue('kumar')
await this.zipCodeInput.setValue('500032')
await browser.pause(1000)
await this.continueBtn.click()
await browser.pause(2000)
}

}

export default new iOSInfoPage()