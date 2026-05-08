describe('UiKitCatalog app Alerts HAndling ', () => {
  /*
     browser --> will be used 
     acceptAlert() --> Ok button an alert
     dismissAlert() ==> cancel button
     getAlertText() ==> which will get text from the alert
     sendAlertText() --> which will send text to alert text field

     */

it('Alerts 7', async () => {
await $('~Alert Views').click();
await $('~Destructive').click();
await $('~Destructive Choice').click();
await browser.pause(2000);
});


it('Alerts 6', async () => {
await $('~Alert Views').click();
await $('~Confirm / Cancel').click();
await $('~Confirm').click();
await browser.pause(2000);
});


it('Alerts 5', async () => {
await $('~Alert Views').click();
await $('~Secure Text Entry').click();
await browser.sendAlertText('Hello');
await browser.acceptAlert();
await browser.pause(2000);

});


it('Alerts 4', async () => {
await $('~Alert Views').click();
await $('~Text Entry').click();
await browser.sendAlertText('Hello');
await browser.acceptAlert();
await browser.pause(2000);

});


it('Alerts 3', async () => {
await $('~Alert Views').click();
await $('~Other').click();
await $('~Choice One').click();
await browser.pause(2000);
});

it('Alerts 2', async () => {
await $('~Alert Views').click();
await $('~Okay / Cancel').click();
await browser.dismissAlert();
await browser.pause(2000);
});

 it('Alerts 1', async () => {
 await $('~Alert Views').click();
 await $('~Simple').click();
 console.log(await browser.getAlertText());
 await browser.acceptAlert();
 await browser.pause(2000);



 });

 });
