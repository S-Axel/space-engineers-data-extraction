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

const checkGameObjectsAreLocalized = (gameObjects, localizationEn) => {
  Object.entries(gameObjects).forEach(([gameObjectName, gameObject]) => {
    if (!localizationEn.hasOwnProperty(gameObject.name)) {
      console.log(`GameObject ${gameObjectName} has no localization key ${gameObject.name}`);
    }
  });
};

const checkLocalizationIntegrity = (localizationData, lang) => {
  Object.entries(localizationData).forEach(([key, translation]) => {
    if (!key) {
      console.log(`In localization ${lang}, key ${key} is empty`);
    }
    if (!translation) {
      console.log(`In localization ${lang} ${key} has an empty translation ${translation}`);
    }
  });
};

const checkDataIntegrity = (blocks, components, ingots, localizationEn) => {
  console.log('Checking data integrity');
  checkRecipiesConsistency(blocks, components, ingots);
  checkAllComponentsHaveMass(components);
  checkGameObjectsAreLocalized(blocks, localizationEn);
  checkGameObjectsAreLocalized(components, localizationEn);
  checkGameObjectsAreLocalized(ingots, localizationEn);
  checkLocalizationIntegrity(localizationEn, 'en');
};

export default checkDataIntegrity;
