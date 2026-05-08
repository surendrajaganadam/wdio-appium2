describe('Swaglabs Order placing flow', () => {

 it('Swaglabs e2e scenario 1', async () => {
   await $('//android.widget.EditText[@content-desc="test-Username"]').setValue('standard_user')
   await $('//android.widget.EditText[@content-desc="test-Password"]').setValue('secret_sauce')
   await $('//android.view.ViewGroup[@content-desc="test-LOGIN"]').click()
   await browser.pause(5000)
   await $('(//android.view.ViewGroup[@content-desc="test-ADD TO CART"])[1]').click()

   await $('//android.view.ViewGroup[@content-desc="test-Cart"]/android.view.ViewGroup/android.widget.ImageView').click()
   await browser.pause(2000)

   await $('//android.widget.TextView[@text="CHECKOUT"]').click()
   await browser.pause(2000)

   await $('//android.widget.EditText[@content-desc="test-First Name"]').setValue('1234')
   await $('//android.widget.EditText[@content-desc="test-Last Name"]').setValue('1234')
   await $('//android.widget.EditText[@content-desc="test-Zip/Postal Code"]').setValue('123')

   await $('//android.widget.TextView[@text="CONTINUE"]').click()
   await browser.pause(2000)

   await $('android= new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)')

   await $('//android.widget.TextView[@text="FINISH"]').click()
   await browser.pause(2000)

   await $('//android.widget.TextView[@text="BACK HOME"]').click()
   await browser.pause(2000)

   await $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView').click()
   await $('//android.view.ViewGroup[@content-desc="test-LOGOUT"]').click()
   await browser.pause(2000)




 });

 });