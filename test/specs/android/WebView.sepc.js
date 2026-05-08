describe('Switch to webview', () => {

 it('Webview flow 1', async () => {
   await $('//android.widget.EditText[@content-desc="test-Username"]').setValue('standard_user')
   await $('//android.widget.EditText[@content-desc="test-Password"]').setValue('secret_sauce')
   await $('//android.view.ViewGroup[@content-desc="test-LOGIN"]').click()
   await browser.pause(5000)
   await $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView').click()
   await $('//android.view.ViewGroup[@content-desc="test-WEBVIEW"]').click()
   await browser.pause(5000)
   await $('//android.widget.EditText[@content-desc="test-enter a https url here..."]').setValue('https://www.bing.com')
   await $('//android.widget.TextView[@text="GO TO SITE"]').click()
   await browser.pause(15000)

   await browser.getContexts()
   await browser.switchContext('WEBVIEW_com.swaglabsmobileapp')
   await $('[id="sb_form_q"]').setValue('WebDriverIO')
   await browser.pause(5000)

   await browser.switchContext('NATIVE_APP')
   await browser.back()
   await browser.pause(5000)
   await $('//android.widget.TextView[@text="GO TO SITE"]').click()
   await browser.pause(5000)


   


   });

 });

