describe('Handle Switches', () => {

 it('Switch handling Part 1', async () => {
await $('~Switches').click()
await $('(//XCUIElementTypeSwitch[@value="1"])[2]').click()
await browser.pause(2000)
await $('~BackButton').click();
 });

 });
