describe('WDIO dropdown Handling', () => {

 it('Select a value from dropdown ', async () => {
      await browser.pause(1000)
      await $('//android.widget.TextView[@text="Forms"]').click()
      await browser.pause(1000)
      console.log(await $('//android.widget.EditText[@text="Select an item..."]').getAttribute('text'))
      await $('//android.widget.EditText[@text="Select an item..."]').click()

      await $('//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="webdriver.io is awesome"]').click()
      await browser.pause(5000)

      
    

      

    });
});