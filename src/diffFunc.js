import _ from 'lodash';
import makeCollection from './makeCollection.js';
import makeRes from './makeRes.js';

const diffFunc = (fileData1, fileData2) => {
  const keys = _.sortBy(_.union(_.keys(fileData1), _.keys(fileData2)));
  console.log(keys);
  const temp = makeCollection(keys, fileData1, fileData2);

  return makeRes(temp);
};

export default diffFunc;
