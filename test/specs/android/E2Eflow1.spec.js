describe('WDIO Signup flow', () => {

 it('Create an account & login', async () => {
      await browser.pause(1000)
      await $('//android.widget.TextView[@text="Login"]').click()
      await $('//android.widget.TextView[@text="Sign up"]').click()
      await $('~input-email').setValue('123@yopmail.com');
      await $('~input-password').setValue('12345678')
      await $('~input-repeat-password').setValue('12345678')
      await $('//android.widget.TextView[@text="SIGN UP"]').click()
      await browser.pause(5000)
      console.log(await browser.getAlertText())
      await browser.acceptAlert()
      await $('//android.widget.TextView[@text="Login"]').click()

      await $('//android.widget.TextView[@text="LOGIN"]').click()
      await browser.pause(5000)
      console.log(await browser.getAlertText())
      await browser.acceptAlert()
      await browser.pause(1000)


      
      
      
    

      

    });
});