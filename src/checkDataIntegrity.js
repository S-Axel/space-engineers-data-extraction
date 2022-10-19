const checkDataIntegrity = (blocks, components, ingots) => {
  console.log('Checking data integrity');
  Object.entries(blocks).forEach(([blockName, block]) => {
    block.recipe.forEach((item) => {
      if (!components.hasOwnProperty(item.subtype)) {
        console.log(`Block ${blockName} uses unknown component ${item.subtype}`);
        return;
      }
      components[item.subtype].recipe.forEach((ingot) => {
        if (!ingots.hasOwnProperty(ingot.subtype)) {
          console.log(`Component ${item.subtype} from block ${blockName} uses unknown ingot ${ingot.subtype}`);
        }
      });
    });
  });
};

export default checkDataIntegrity;
