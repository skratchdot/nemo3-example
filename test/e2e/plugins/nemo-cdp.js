import CDP from 'chrome-remote-interface';

const getClient = async port => new Promise((resolve, reject) => {
  let errorCount = 0;
  CDP({ port }, client => {
    return resolve(client);
  }).on('error', err => {
    errorCount++;
    console.error(err);
    if (errorCount === 1) {
      return reject(err);
    }
  });
});

export const setup = async (nemo, callback) => {
  await nemo.driver.get('chrome://version');
  const result = await nemo.driver.executeScript(function() {
    return (/(\-\-remote-debugging-port\=)([0-9]+)/gi).exec(
      document.body.textContent
    );
  });
  const port = parseInt(result[2], 10);
  nemo.cdp = await getClient(port);
  callback();
};
