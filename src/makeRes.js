import _ from 'lodash';

const makeRes = (temp) => {
  let result = '{\n';
  for (const i of temp) {
    if (_.get(i, 'status') === 'deleted') {
      result += `  -${i.keyName}:${_.get(i, 'value')},\n`;
    } else if (_.get(i, 'status') === 'new') {
      result += `  +${i.keyName}:${_.get(i, 'value')},\n`;
    } else if (_.get(i, 'status') === 'no changes') {
      result += `   ${i.keyName}:${_.get(i, 'value')},\n`;
    } else if (_.get(i, 'status') === 'edit') {
      result += `  -${i.keyName}:${_.get(i, 'firstValue')},\n`;
      result += `  +${i.keyName}:${_.get(i, 'secondValue')},\n`;
    }
  }

  return result;
};

export default makeRes;
