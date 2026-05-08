class OverviewPage {

get finishButton(){
return $('~test-FINISH')
}


get backToHomeButton(){
return $('~test-BACK HOME')
}

async placeOrder(){
await browser.execute('mobile: scroll', {
     strategy: 'accessibility id',
     selector: 'test-FINISH',
     direction: 'down'

     });
await this.finishButton.click()
await browser.pause(2000)
await this.backToHomeButton.click()
await browser.pause(2000)
}

}

export default new OverviewPage()

