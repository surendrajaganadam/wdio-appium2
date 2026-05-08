describe('Alerts Handling', () => {

    it('Handling Alerts Part 4', async () => {
     await browser.pause(1000)
     await $('//android.widget.TextView[@resource-id="android:id/text1" and @text="App"]').click()
     await $('//android.widget.TextView[@resource-id="android:id/text1" and @text="Alert Dialogs"]').click()
     await $('[id="demo.fun.com.apis:id/two_buttons"]').click()
     console.log(await browser.getAlertText())
     await browser.acceptAlert()
     await browser.pause(1000)


    });

    it('Handling Alerts Part 3', async () => {
     await $('//android.widget.TextView[@text="Forms"]').click()
     await browser.pause(1000)
     await $('//android.view.ViewGroup[@content-desc="button-Active"]').click()
     await browser.pause(1000)
     //[attriute = 'value'] --> css selector
    console.log(await browser.getAlertText())
    await $('[id="android:id/button1"]').click()
    await browser.pause(1000)
    await $('~text-input').click()
    await $('~text-input').setValue('Hello')
    await browser.pause(2000)                                                                       

// io.appium.android.apis.app.DialogActivity

    });


    it('Handling Alerts Part 2', async () => {
     await $('//android.widget.TextView[@text="Forms"]').click()
     await browser.pause(1000)
     await $('//android.view.ViewGroup[@content-desc="button-Active"]').click()
     await browser.pause(1000)
     /*
     browser --> will be used 
     acceptAlert() --> Ok button an alert
     dismissAlert() ==> cancel button
     getAlertText() ==> which will get text from the alert
     sendAlertText() --> which will send text to alert text field

     */
    console.log(await browser.getAlertText())
    await browser.dismissAlert()
    await browser.pause(1000)
    await $('~text-input').click()
    await $('~text-input').setValue('Hello')
    await browser.pause(2000)                                                                       



    });

    it('Handling Alerts Part 1', async () => {
     await $('//android.widget.TextView[@text="Forms"]').click()
     await browser.pause(1000)
     await $('//android.view.ViewGroup[@content-desc="button-Active"]').click()
     await browser.pause(1000)
     /*
     browser --> will be used 
     acceptAlert() --> Ok button an alert
     dismissAlert() ==> cancel button
     getAlertText() ==> which will get text from the alert
     sendAlertText() --> which will send text to alert text field

     */
    console.log(await browser.getAlertText())
    await browser.acceptAlert()
    await browser.pause(1000)
    await $('~text-input').click()
    await $('~text-input').setValue('Hello')
    await browser.pause(2000)                                                                       



    });



});
