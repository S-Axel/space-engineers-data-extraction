import fs from 'fs';

const writeJsonFile = async (fileName, data) => new Promise ((resolve) => {
  const callback = (err) => {
    if (err) throw err;
    resolve();
  }
  fs.writeFile(`extracted_data/${fileName}.json`, JSON.stringify(data, null, 2), callback);
});

export default writeJsonFile;
