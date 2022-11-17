import readXmlFile from './readXmlFile.js';

const filterBlueprintXml = (xml) => (
  xml.Definitions.Blueprints[0].Blueprint.filter((blueprint) => {
    return blueprint.Result && blueprint.Result[0].$.TypeId === 'Component';
  })
);

const mapXmlToComponents = (xml) => (
  Object.fromEntries(
    xml.map((blueprint) => ([
      blueprint.Result[0].$.SubtypeId,
      {
        name: blueprint.DisplayName[0],
        recipe: blueprint.Prerequisites[0].Item.map((item) => ({
          subtype: item.$.SubtypeId,
          count: item.$.Amount,
        })),
    }]))
  )
);

const addMassToComponents = async (gameFolder, components) => {
  const componentsXml = await readXmlFile(`${gameFolder}/Content/Data/Components.sbc`);
  componentsXml.Definitions.Components[0].Component.forEach((compX) => {
    components[compX.Id[0].SubtypeId[0]].mass = compX.Mass[0];

  });
  return components;
};

const parseComponents = async (gameFolder) => {
  const blueprintsXml = await readXmlFile(`${gameFolder}/Content/Data/Blueprints.sbc`);
  const filteredXml = filterBlueprintXml(blueprintsXml);
  const components = mapXmlToComponents(filteredXml);
  return await addMassToComponents(gameFolder, components);
};

export default parseComponents;
