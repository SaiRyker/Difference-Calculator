import fs from 'fs';
import path from 'path';
import process from 'process';
import diffFunc from './diffFunc.js';
import parse from './parsers/parsers.js';

const getExtension = (filepath) => path.extname(filepath).slice(1);

const getPath = (filename) => path.resolve(process.cwd(), filename);

const genDiff = (filepath1, filepath2) => {
  const path1 = getPath(filepath1);
  const ext1 = getExtension(filepath1);
  const fileData1 = parse(fs.readFileSync(path1, 'utf8'), ext1);
  const path2 = getPath(filepath2);
  const ext2 = getExtension(filepath2);
  const fileData2 = parse(fs.readFileSync(path2, 'utf8'), ext2);
  return diffFunc(fileData1, fileData2);
};

console.log(genDiff("file1.json", "file2.json"))

export default genDiff;
