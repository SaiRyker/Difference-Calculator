import yaml from 'js-yaml';

const parse = (data, fileType) => {
  if (fileType === 'yaml' || fileType === 'yml') {
    return yaml.load(data);
  } if (fileType === 'json') {
    return JSON.parse(data);
  }
  throw new Error(`Unknown extension ${fileType}`);
};

export default parse;
