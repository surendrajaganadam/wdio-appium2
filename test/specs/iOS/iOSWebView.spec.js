describe('WebView Handling Part 1', () => {

 it('Handle webview in saucedemo app', async () => {
 await $('~test-Username').setValue('standard_user')
 await $('~test-Password').setValue('secret_sauce')
 await $('~test-LOGIN').click()
 await browser.pause(2000)
 const menuBar = await $('~test-Menu')
 await safeTap(menuBar)
await $('~test-WEBVIEW').click()
await browser.pause(3000)
await $('~test-enter a https url here...').setValue('https://www.bing.com')
await $('~test-GO TO SITE').click()
await browser.pause(5000)

// await $('//XCUIElementTypeTextField[@name="Enter your search here - Search suggestions will show as you type"]/XCUIElementTypeOther[1]').click()
const textFeild = await $('//XCUIElementTypeTextField[@name="Enter your search here - Search suggestions will show as you type"]/XCUIElementTypeOther[1]')
const loc = await textFeild.getLocation()
const size = await textFeild.getSize()

const x = Math.floor(loc.x + size.width/2)
const y = Math.floor(loc.y + size.height/2)

await browser.execute('mobile: tap', {x:x, y:y})
await $('//XCUIElementTypeTextField[@name="Enter your search here - Search suggestions will show as you type"]/XCUIElementTypeOther[1]').setValue('surendra')

 

 
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
