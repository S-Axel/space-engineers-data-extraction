import readXmlFile from './readXmlFile.js';

const filterXmlIngots = (xml) => (
  xml.Definitions.Blueprints[0].Blueprint.filter((blueprint) => {
    return blueprint.Results
      ? blueprint.Results[0].Item?.length === 1 && blueprint.Results[0].Item[0].$.TypeId === 'Ingot'
      : blueprint.Result[0].$.TypeId === 'Ingot';
  })
);

const mapXmlIngots = (xml) => (
  Object.fromEntries(
    xml
      .map((blueprint) => ([blueprint.Results ? blueprint.Results[0].Item[0].$.SubtypeId : blueprint.Result[0].$.SubtypeId, {
        name: blueprint.DisplayName[0],
      }]))
      .reverse()
  )
);

const parseIngots = async (gameFolder) => {
  console.log('parsing ingots');
  const xml = await readXmlFile(`${gameFolder}/Content/Data/Blueprints.sbc`);
  const xmlIngots = filterXmlIngots(xml);
  return mapXmlIngots(xmlIngots);
};

export default parseIngots;
