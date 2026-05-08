describe('Gestures swipe left or right', () => {

    it('Perform Swipe Left 1', async () => {
        await browser.pause(2000)
        await $('//android.widget.TextView[@text="Swipe"]').click()
        await browser.pause(2000)

        const el = $('(//android.view.ViewGroup[@content-desc="card"])[1]')
        const location = await el.getLocation()
        const size = await el.getSize()
        await browser.execute('mobile: swipeGesture', {
        left: Math.floor(location.x),
        top: Math.floor(location.y),
        width: Math.floor(size.width),
        height: Math.floor(size.height),
        direction: 'left',
        percent: 0.9
    })
    await browser.pause(2000)
        
    });
});
