import fs from 'fs';
import _ from 'lodash';
import diffFunc from './diffFunc.js';
import path from "path"
import process from 'process';


const parse = (data) => JSON.parse(data);
const filepath1 = 'C:\\Users\\danii\\Desktop\\Project_Hexlet_Second\\Difference-Calculator\\__fixtures__\\file1.json';
const filepath2 = 'C:\\Users\\danii\\Desktop\\Project_Hexlet_Second\\Difference-Calculator\\__fixtures__\\file2.json';


const getPath = (filename) => path.resolve(process.cwd(),'difference-calculator/__fixtures__', filename);


const genDiff = (filepath1, filepath2) => {
    const path1 = getPath(filepath1);
    const fileData1 = parse(fs.readFileSync(path1, 'utf8'));
    const path2 = getPath(filepath2)
    const fileData2 = parse(fs.readFileSync(path2, 'utf8'));
    
    return diffFunc(fileData1, fileData2)
};

console.log(genDiff("file1.json", "file2.json"));

export default genDiff;