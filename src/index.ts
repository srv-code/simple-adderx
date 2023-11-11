import { getType } from './util/detect-types.util';

const showType = () => {
  console.log(process.argv);

  console.log(getType(2));
};

showType();
