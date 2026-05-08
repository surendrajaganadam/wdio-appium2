describe('Swipe Up IOS', () => {

 it('Handlign Swipeup 1', async () => {
await browser.pause(2000)

await browser.execute('mobile: scroll', {
     strategy: 'accessibility id',
     selector: 'Web View',
     direction: 'down'


     });

    await browser.pause(2000)
     await browser.execute('mobile: scroll', {
     strategy: 'accessibility id',
     selector: 'Acitivity Indicators',
     direction: 'up'


     });
 

 });

 });