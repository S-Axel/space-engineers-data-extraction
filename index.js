import writeJsonFile from './src/writeJsonFile.js';
import parseComponents from './src/parseComponents.js';
import parseIngots from './src/parseIngots.js';
import parseBlocks from './src/parseBlocks.js';
import checkDataIntegrity from './src/checkDataIntegrity.js';

const gameFolder = 'E:/Games/Steam/steamapps/common/SpaceEngineers';

const ingots = await parseIngots(gameFolder);
const components = await parseComponents(gameFolder);
const blocks = await parseBlocks(gameFolder);

checkDataIntegrity(blocks, components, ingots);

await writeJsonFile('ingots', ingots);
await writeJsonFile('components', components);
await writeJsonFile('blocks', blocks);
