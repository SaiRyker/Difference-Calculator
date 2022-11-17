import fs from 'fs';
import path from 'path';
import process from 'process';
import diffFunc from './diffFunc.js';

const parse = (data) => JSON.parse(data);

const getPath = (filename) => path.resolve(process.cwd(), 'difference-calculator/__fixtures__', filename);

const genDiff = (filepath1, filepath2) => {
  const path1 = getPath(filepath1);
  const fileData1 = parse(fs.readFileSync(path1, 'utf8'));
  const path2 = getPath(filepath2);
  const fileData2 = parse(fs.readFileSync(path2, 'utf8'));

  return diffFunc(fileData1, fileData2);
};

export default genDiff;
