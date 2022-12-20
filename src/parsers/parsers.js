import yaml from "js-yaml";


const parse = (data, fileType) => {
    if (fileType === "yaml" || fileType === "yml") {
        return yaml.load(data)
    } else if (fileType === "json") {
        return JSON.parse(data);
    } else {
        throw new Error(`Unknown extension ${fileType}`)
    }
}


export default parse;