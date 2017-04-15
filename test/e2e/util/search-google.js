import snap from './snap';

export default async (nemo, searchTerm, locatorFn) => {
  const { searchInput, searchButton } = nemo.view.google;
  await searchInput().sendKeys(searchTerm);
  await snap();
  await searchButton().click();
  await snap();
  await locatorFn().click();
  await snap();
};
