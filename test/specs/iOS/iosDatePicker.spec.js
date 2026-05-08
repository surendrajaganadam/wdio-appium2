describe('Handle Date picker', () => {

 it('Date Picker handling Part 1', async () => {
await $('~Date Picker').click()
await $('(//*[@type="XCUIElementTypeButton"])[3]').click()
await $('(//*[contains(@label,"Today")]//following-sibling::XCUIElementTypeButton)[1]').click()
//tagname[contains(@attbiteute, "value")]//following-sibling::tagname
await browser.pause(2000)
await $('~BackButton').click();
 });

 it(' Picker View handling Part 1', async () => {
await $('~Picker View').click()
const wheel = await $('~Red color component value')
const beforeValue = await wheel.getAttribute('value')
console.log("Before value is " + beforeValue)
await browser.execute('mobile: selectPickerWheelValue', {
elementId: wheel.elementId,
order: 'next', //previous
offset: 0.25
})

await browser.pause(2000)
const afterValue = await wheel.getAttribute('value')
console.log("after value is " + afterValue)

await $('~BackButton').click();
 });

it('Segmented Controls handling Part 1', async () => {
await $('~Segmented Controls').click()
await $('(//XCUIElementTypeButton[@name="Tools"])[2]').click()
await browser.pause(2000)


await $('~BackButton').click();
 });

 


 });
