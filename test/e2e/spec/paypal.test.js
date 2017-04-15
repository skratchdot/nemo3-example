import searchGoogle from '../util/search-google';
import snap from '../util/snap';

test('go to paypal from google', async () => {
  const { data, driver, view } = nemo;
  await driver.get(data.urlGoogle);
  await snap();
  await searchGoogle(nemo, data.urlPayPal, view.google.linkPayPalWait);
  await view.paypal.titleWait();
  await snap();
});
