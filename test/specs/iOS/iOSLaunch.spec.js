describe('Verve app flows', () => {

 it('Launch verve app', async () => {
 await browser.pause(4000)

 });

 //tagname[@attirbute="valie"] pr //*[@aatrubute="value"]

 it('indeitfy using xpath', async () => {
  await $('//*[@label="Switches"]').click()
  await $('(//*[@type="XCUIElementTypeSwitch"])[1]').click()
  await browser.pause(2000)
 })

 //37 elements found --> but if we use $ it will give u on 1 element
it('identify using tagnames', async () => {
 const val = await $$('XCUIElementTypeStaticText')
 console.log("**********************************************")
 for(const element of val){
  console.log(await element.getText())
 }
 console.log("**********************************************")
})






 it('Idenify element using accesibility ids', async () => {
 await $('~Sign up').click()
 await $('//*[@value="Enter email address"]').setValue('surendra124@yopmail.com')
 await browser.pause(2000)
 //tagname[@atrubitetyoe="value"] or tagname[atteibutr="value"]

 });

 it('Handle textfeilds & buttons', async () => {
  await $('~I already have an account').click()
  await $('//XCUIElementTypeTextField[@value="Enter email address"]').setValue('suren@yopmail.com')
  await $('//XCUIElementTypeSecureTextField[@value="Enter password"]').setValue('NewPass@123')
  await $('~Continue').click()
  await browser.pause(5000)
 })



 
 });