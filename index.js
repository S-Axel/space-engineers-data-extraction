import writeJsonFile from './src/writeJsonFile.js';
import parseComponents from './src/parseComponents.js';
import parseIngots from './src/parseIngots.js';
import parseBlocks from './src/parseBlocks.js';
import checkDataIntegrity from './src/checkDataIntegrity.js';
import parseLocalization from './src/parseLocalization.js';

const gameFolder = 'E:/Games/Steam/steamapps/common/SpaceEngineers';

const ingots = await parseIngots(gameFolder);
const components = await parseComponents(gameFolder);
const blocks = await parseBlocks(gameFolder);

const localizationEn = await parseLocalization(gameFolder, 'en', ingots, components, blocks);

checkDataIntegrity(blocks, components, ingots, localizationEn);

await writeJsonFile('ingots', ingots);
await writeJsonFile('components', components);
await writeJsonFile('blocks', blocks);

await writeJsonFile('lang-en', localizationEn);
