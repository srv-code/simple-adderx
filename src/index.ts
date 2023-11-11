import { getType } from './util/detect-types.util';
import FS from 'fs';

const showType = () => {
  // console.log(process.argv);

  console.log(getType(['s', '3']));
  // console.log(getType(new String('s')));

  FS.readdir('/Users/sourav.dey/Desktop/tmp/test/ts', (err, res) => {
    if (err) {
      console.error('Failed: ' + err.message);
      return;
    }
    for (const d of res) console.log(d);
  });
};

showType();
