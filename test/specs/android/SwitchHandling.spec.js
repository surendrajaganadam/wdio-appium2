describe('WDIO Switch Handling', () => {

 it('Perform On & Off Operation on a switch 2', async () => {
      await browser.pause(1000)
      await $('//android.widget.TextView[@text="Forms"]').click()
      await browser.pause(1000)
      console.log(await $('~switch').getAttribute('text'))
      
    

      

    });



    it('Perform On & Off Operation on a switch', async () => {
      await browser.pause(1000)
      await $('//android.widget.TextView[@text="Forms"]').click()
      await browser.pause(1000)
      await $('~switch').click()
      
      await browser.pause(1000)
      console.log(await $('~switch-text').getText())
     
    

      

    });

});