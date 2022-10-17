import writeJsonFile from './src/writeJsonFile.js';
import parseComponents from './src/parseComponents.js';

const gameFolder = 'E:/Games/Steam/steamapps/common/SpaceEngineers';

const components = await parseComponents(gameFolder);
await writeJsonFile('components', components);

// Additional component: Components_economy.sbc
// Recipes: Blueprints.sbc Blueprints_Economy.sbc
// Ingots: Blueprints.sbc
