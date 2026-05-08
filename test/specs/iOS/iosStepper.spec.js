describe('Stepper Handling', () => {

it('Stepper 2', async () => {
 await $('~Steppers').click()
 await $('(//XCUIElementTypeButton[@name="Increment"])[1]').click()
 await $('(//XCUIElementTypeButton[@name="Increment"])[1]').click()

 await $('(//XCUIElementTypeButton[@name="Increment"])[2]').click()
 await $('(//XCUIElementTypeButton[@name="Increment"])[2]').click()
 await $('(//XCUIElementTypeButton[@name="Increment"])[2]').click()

 await $('(//XCUIElementTypeButton[@name="Increment"])[3]').click()
 await $('(//XCUIElementTypeButton[@name="Increment"])[3]').click()
 await $('(//XCUIElementTypeButton[@name="Increment"])[3]').click()
 await $('(//XCUIElementTypeButton[@name="Increment"])[3]').click()

 console.log(await $('(//*[@type="XCUIElementTypeStaticText"])[4]').getAtribute('value'))
 await browser.pause(2000)
 await $('~BackButton').click()

 });



 it('Stepper 1', async () => {
 await $('~Steppers').click()
 await $('(//XCUIElementTypeButton[@name="Increment"])[1]').click()
 await browser.pause(2000)
 await $('~BackButton').click()

 });

 });