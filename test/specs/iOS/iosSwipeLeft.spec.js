describe('Swipe Left & Right', () => {

 it('Launch verve app & perfrom swipe left operation', async () => {
      await browser.pause(2000)
      const el1 = await $('~onboarding_img1');
      const ele2 = await $('~onboarding_img2');

      swipeLeft(el1);
      await browser.pause(5000)
      swipeLeft(ele2);
      await browser.pause(2000)

    })




 });


 async function swipeLeft(el){
        
        const location = await el.getLocation()
        const size = await el.getSize()
        await browser.execute('mobile: swipe', {
        left: Math.floor(location.x),
        top: Math.floor(location.y),
        width: Math.floor(size.width),
        height: Math.floor(size.height),
        direction: 'left',
        percent: 0.5})

 
}