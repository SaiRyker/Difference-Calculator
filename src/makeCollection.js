import _ from 'lodash';

const makeCollection = (keys, fileData1, fileData2) => {
  const res = keys.map((keyName) => {
    if (!_.has(fileData1, keyName) && _.has(fileData2, keyName)) {
      return { keyName, status: 'new', value: _.get(fileData2, keyName) };
    }
    if (_.has(fileData1, keyName) && !_.has(fileData2, keyName)) {
      return { keyName, status: 'deleted', value: _.get(fileData1, keyName) };
    }
    if ((_.has(fileData1, keyName) && _.has(fileData2, keyName))) {
      if (_.get(fileData1, keyName) === _.get(fileData2, keyName)) {
        return { keyName, status: 'no changes', value: _.get(fileData1, keyName) };
      }
      return {
        keyName, status: 'edit', firstValue: _.get(fileData1, keyName), secondValue: _.get(fileData1, keyName),
      };
    }
  });

  return res;
};

export default makeCollection;
