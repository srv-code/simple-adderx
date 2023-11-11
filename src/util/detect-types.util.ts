import { IFullName, Type } from '../types/params.type';

export const getType = (arg: any): Type => {
  // console.log(arg.prototype);

  let type = typeof arg;
  if (type === 'object') {
    if (Array.isArray(arg)) return 'array';
    return 'object';
  }
  return type;
};
