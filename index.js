import writeJsonFile from './src/writeJsonFile.js';
import parseComponents from './src/parseComponents.js';
import parseIngots from './src/parseIngots.js';
import parseBlocks from './src/parseBlocks.js';

const gameFolder = 'E:/Games/Steam/steamapps/common/SpaceEngineers';

const components = await parseComponents(gameFolder);
await writeJsonFile('components', components);

const ingots = await parseIngots(gameFolder);
await writeJsonFile('ingots', ingots);

const blocks = await parseBlocks(gameFolder);
await writeJsonFile('blocks', blocks);
