import Nemo from 'nemo';
import debug from 'debug';
import path from 'path';

const configDir = path.resolve(`${__dirname}/`);

// setup jasmine variables
jasmine.DEFAULT_TIMEOUT_INTERVAL = 15 * 60 * 1000; // 15 minutes

// setup a few global variables
global.nemoLog = debug('nemo:log');
global.nemoError = debug('nemo:error');
global.nemo = null;

beforeEach(async () => {
  nemoLog('creating driver');
  const startTime = Date.now();
  nemo = await Nemo(configDir);
  nemo.log = nemoLog;
  nemo.error = nemoError;
  nemo.data.startTime = startTime;
  await nemo.driver.manage().window().setSize(1024, 7680);
  expect(nemo).toHaveProperty('driver');
  expect(nemo).toHaveProperty('data');
});

afterEach(async () => {
  nemo.log('nemo driver is quitting');
  const { driver } = nemo;
  await driver.quit();
  nemo.log('nemo driver has quit');
});
