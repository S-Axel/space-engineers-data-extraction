import readXmlFile from './readXmlFile.js';

const filterXmlIngots = (xml) => (
  xml.Definitions.Blueprints[0].Blueprint.filter((blueprint) => {
    return blueprint.Results
      ? blueprint.Results[0].Item?.length === 1 && blueprint.Results[0].Item[0].$.TypeId === 'Ingot'
      : blueprint.Result[0].$.TypeId === 'Ingot';
  })
);

const mapXmlIngots = (xml) => (
  xml.map((blueprint) => ({
    typeId: blueprint.Results ? blueprint.Results[0].Item[0].$.TypeId : blueprint.Result[0].$.TypeId,
    subtypeId: blueprint.Results ? blueprint.Results[0].Item[0].$.SubtypeId : blueprint.Result[0].$.SubtypeId,
    displayName: blueprint.DisplayName[0],
  }))
);

const removeDuplicates = (ingots) => (
  ingots.filter((ingot, index) => (
    ingots.findIndex(fIngot => fIngot.subtypeId === ingot.subtypeId) === index
  ))
);

const parseIngots = async (gameFolder) => {
  const xml = await readXmlFile(`${gameFolder}/Content/Data/Blueprints.sbc`);
  const xmlIngots = filterXmlIngots(xml);
  const ingots = mapXmlIngots(xmlIngots);
  return removeDuplicates(ingots);
};

export default parseIngots;
