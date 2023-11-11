import { add } from '..';

export default () => {
  console.log('adding mixed types: ', add('a', 7, [4, 5, 'd']));
};
