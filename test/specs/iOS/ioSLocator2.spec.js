describe('Verve app flows locators 2', () => {

 it('Ideitfy using ios class chain', async () => {
const element = '**/XCUIElementTypeButton[`name == "Sign up"`]';
await $(`-ios class chain:${element}`).click()

await browser.pause(2000)

 });


 it('Ideitfy using ios predicate string', async () => {
const element = 'name == "Sign up"';
await $(`-ios predicate string:${element}`).click()

await browser.pause(2000)

 });

 });
