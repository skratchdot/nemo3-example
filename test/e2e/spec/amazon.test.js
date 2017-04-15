import searchGoogle from '../util/search-google';

test('go to paypal from google', async () => {
  const { data, driver, view } = nemo;
  await driver.get(data.urlGoogle);
  await searchGoogle(nemo, data.urlAmazon, view.google.linkAmazonWait);
  await view.amazon.titleWait();
});
