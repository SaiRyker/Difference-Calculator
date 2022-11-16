import _ from 'lodash';

const diffFunc = (fileData1, fileData2) => {
    let result = '{\n';
    const keys = _.sortBy(_.union(_.keys(fileData1), _.keys(fileData2)));

    const temp = keys.map((keyName) => {
        if (!_.has(fileData1, keyName) && _.has(fileData2, keyName)) {
            return {keyName, status: "new", value:_.get(fileData2, keyName)};
        }
        if (_.has(fileData1, keyName) && !_.has(fileData2, keyName)) {
            return {keyName, status: "deleted", value:_.get(fileData1, keyName)};
        }
        if ((_.has(fileData1, keyName) && _.has(fileData2, keyName))) {
            if (_.get(fileData1, keyName) === _.get(fileData2, keyName)) {
                return {keyName, status:"no changes", value:_.get(fileData1, keyName)}
            } else {
                return {keyName, status: "edit", firstValue:_.get(fileData1, keyName), secondValue:_.get(fileData1, keyName)}
            }
        }
    })

    for (let i of temp) {
        console.log()
        if (_.get(i, "status") === 'deleted') {
            result += `  -${i.keyName}:${_.get(i, "value")},\n`
        } else if (_.get(i, "status") === 'new') {
            result += `  +${i.keyName}:${_.get(i, "value")},\n`
        } else if (_.get(i, "status") === 'no changes') {
            result += `   ${i.keyName}:${_.get(i, "value")},\n`
        } else if (_.get(i, "status") === 'edit') {
            result += `  -${i.keyName}:${_.get(i, "firstValue")},\n`
            result += `  +${i.keyName}:${_.get(i, "secondValue")},\n`
        }
    }

    return result;
}

export default diffFunc;