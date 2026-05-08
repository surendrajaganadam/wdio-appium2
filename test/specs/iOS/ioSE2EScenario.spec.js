describe('E2E Scenario', () => {

 it('Scenario 1', async () => {
 await $('~test-Username').setValue('standard_user')
 await $('~test-Password').setValue('secret_sauce')
 await $('~test-LOGIN').click()
 await browser.pause(2000)
await $('(//XCUIElementTypeOther[@name="test-ADD TO CART"])[1]').click()
const cartBtn = await $('~test-Cart')
await safeTap(cartBtn)
await browser.pause(2000)
await $('~test-CHECKOUT').click()
await browser.pause(2000)
await $('~test-First Name').setValue('surendra')
await $('~test-Last Name').setValue('kumar')
await $('~test-Zip/Postal Code').setValue('500032')
await browser.pause(1000)
await $('~test-CONTINUE').click()
await browser.pause(2000)
await browser.execute('mobile: scroll', {
     strategy: 'accessibility id',
     selector: 'test-FINISH',
     direction: 'down'

     });
await $('~test-FINISH').click()
await browser.pause(2000)
await $('~test-BACK HOME').click()
await browser.pause(2000)
 const menuBar = await $('~test-Menu')
 await safeTap(menuBar)
 await $('~test-LOGOUT').click()
 await browser.pause(2000)

 });

 });

 async function safeTap(element){
try{
await element.click()
}catch {}

const loc = await element.getLocation()
const size = await element.getSize()

const x = Math.floor(loc.x + size.width/2)
const y = Math.floor(loc.y + size.height/2)

const safeY = Math.max(y, 70)
await driver.execute('mobile: tap', {x:x, y:safeY})

}
