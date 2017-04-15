import searchGoogle from '../util/search-google';

test('go to paypal from google', async () => {
  const { data, driver, view } = nemo;
  await driver.get(data.urlGoogle);
  await searchGoogle(nemo, data.urlFacebook, view.google.linkFacebookWait);
  await view.facebook.titleWait();
});
