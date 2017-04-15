import fse from 'fs-extra';
import path from 'path';

const REPORT_DIR = path.normalize(`${__dirname}/../reports/`);
let pic = 0;

export default async () => {
  const num = (pic++).toString(10).padStart(5, '0');
  const diff = Date.now() - nemo.data.startTime;
  const name = `${nemo.data.startTime}_${num}_${diff}`;
  const picData = await nemo.driver.takeScreenshot();
  fse.outputFile(
    `${REPORT_DIR}/${name}.png`,
    picData.replace(/^data:image\/png;base64,/, ''),
    'base64'
  );
};
