describe('Gestures', () => {

 

    it('Perform Swipe Up 3', async () => {
        await browser.pause(2000)
        await $('//android.widget.TextView[@resource-id="android:id/text1" and @text="Views"]').click()
        await browser.pause(2000)
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Tabs")')
        
    });

    it('Perform Swipe Up 2', async () => {
        await browser.pause(2000)
        await $('//android.widget.TextView[@resource-id="android:id/text1" and @text="Views"]').click()
        await browser.pause(2000)
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')
        await browser.pause(2000)
        await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollToBeginning(1,5)')
    
    });

    it('Perform Swipe Up 1', async () => {
     await browser.pause(2000)
     await $('//android.widget.TextView[@resource-id="android:id/text1" and @text="Views"]').click()
     await browser.pause(2000)

  

     await browser.execute('mobile: scroll', {
     strategy: 'accessibility id',
     selector: 'Spinner',
     direction: 'down'


     });
    await browser.pause(2000)
     await browser.execute('mobile: scroll', {
     strategy: 'accessibility id',
     selector: 'Buttons',
     direction: 'up'


     });


    });
});
    