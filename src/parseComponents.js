import readXmlFile from './readXmlFile.js';

const parseComponents = async (gameFolder) => {
  const data = await readXmlFile(`${gameFolder}/Content/Data/Components.sbc`);
  return data.Definitions.Components[0].Component.map((xmlComponent) => ({
    typeId: xmlComponent.Id[0].TypeId[0],
    subtypeId: xmlComponent.Id[0].SubtypeId[0],
    displayName: xmlComponent.DisplayName[0],
  }));
};

export default parseComponents;
