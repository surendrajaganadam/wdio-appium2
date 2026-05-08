import fs from 'node:fs'

describe('WDIO Login flow', () => {

    it('Perform Login Operation111111', async () => {
         await browser.pause(12000)
         await browser.getContexts()
         await browser.switchContext('WEBVIEW_com.swaglabsmobileapp')
         await browser.pause(2000)
         await $('[id="sb_form_q"]').setValue('WebDriverIO')
         await browser.pause(5000)
           


        
    

        
        
        await browser.pause(5000)

    });




    it('Perform Login Operation', async () => {
    

        await $('//android.widget.TextView[@text="Login"]').click()
        await browser.pause(8000)
        await $('~input-email').click()
        await $('~input-email').setValue('124')
        await $('~input-password').click()
        await $('~input-password').setValue('123')
        await $('//android.widget.TextView[@text="LOGIN"]').click()
        await browser.pause(5000)

    });

    it('Perform Login Operation 2', async () => {
        await browser.pause(5000)
        await $('//android.widget.TextView[@text="Login"]').click()
        await browser.pause(8000)
        await $('~input-email').click()
        await $('~input-email').addValue('124')

        await browser.pause(8000)
        

    });

    it('Identify using xpath', async () => {
        await browser.pause(2000)
        // await $('//*[@text="Drag"]').click()
        await $('(//*[@class="android.widget.Button"])[4]').click()
        await browser.pause(2000)
    })

    const test = 'it'
    test('Identify element using ClassName', async () => {
        await browser.pause(2000)
        await $('android.widget.Button').click()
        await browser.pause(2000)
        


    });




});

