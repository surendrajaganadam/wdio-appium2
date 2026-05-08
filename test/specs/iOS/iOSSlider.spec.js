describe('Handling Slider', () => {


 it('Sliders Handling Part 2', async () => {
 await $('~Sliders').click()
 await $('(//*[@type="XCUIElementTypeSlider"])[1]').setValue(0.9)
 await browser.pause(500)
 await $('(//*[@type="XCUIElementTypeSlider"])[2]').setValue(0.9)
 await browser.pause(500)
 await $('(//*[@type="XCUIElementTypeSlider"])[3]').setValue(0.9)
 await browser.pause(500)
 await $('(//*[@type="XCUIElementTypeSlider"])[4]').setValue(0.9)
 await browser.pause(2500)
 await $('~BackButton').click()
 

 });

 it('Sliders Handling Part 1', async () => {
 await $('~Sliders').click()
 await $('(//*[@type="XCUIElementTypeSlider"])[1]').setValue(0.9)
 await browser.pause(1000)
 await $('~BackButton').click()
 

 });

 });
