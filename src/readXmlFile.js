import fs from 'fs';
import xml2js from 'xml2js';

const parser = new xml2js.Parser();

const readXmlFile = async (filePath) => new Promise((resolve) => {
  fs.readFile(filePath, (fsErr, data) => {
    if (fsErr) throw fsErr;
    parser.parseString(data, (parseErr, xmlObject) => {
      if (parseErr) throw parseErr;
      resolve(xmlObject);
    });
  });
});

export default readXmlFile;
