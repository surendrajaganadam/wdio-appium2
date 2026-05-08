describe('WDIO Login flow 4', () => {
                                                                                                    
    it('Perform Login Operation 3', async () => {
    await browser.pause(5000)
    const selector = 'new UiSelector().text("Swipe").className("android.widget.TextView")'
    const button = await $(`android=${selector}`)
    await button.click()
    await browser.pause(5000)


    });

     it('Retrive text from an element', async () => {
      await browser.pause(2000)
      const msg = await $('//android.widget.TextView[@text="Login"]').getText()
      console.log(msg)

    });

    it('Capture all elements information and print them', async () => {
     await browser.pause(2000)
     const values = await $$('android.widget.TextView')
     console.log("**********")
     for(const value of values){
      console.log(await value.getText())
     }
     console.log("**********")

    });



});
