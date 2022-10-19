import fs from 'fs';

const writeJsonFile = async (fileName, data) => new Promise ((resolve) => {
  console.log(`writing extracted_data/${fileName}.json`);
  const callback = (err) => {
    if (err) throw err;
    resolve();
  }
  fs.writeFile(`extracted_data/${fileName}.json`, JSON.stringify(data, null, 2), callback);
});

export default writeJsonFile;
