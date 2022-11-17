const checkRecipiesConsistency = (blocks, components, ingots) => {
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

const checkAllComponentsHaveMass = (components) => {
  Object.entries(components).forEach(([componentName, component]) => {
    if (!component.mass) {
      console.log(`Component ${componentName} has no mass`);
    }
  });
};

const checkDataIntegrity = (blocks, components, ingots) => {
  console.log('Checking data integrity');
  checkRecipiesConsistency(blocks, components, ingots);
  checkAllComponentsHaveMass(components);
};

export default checkDataIntegrity;
