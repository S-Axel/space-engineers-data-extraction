import readXmlFile from './readXmlFile.js';

const filterXml = (xml) => (
  xml.Definitions.Blueprints[0].Blueprint.filter((blueprint) => {
    return blueprint.Result && blueprint.Result[0].$.TypeId === 'Component';
  })
);

const mapXmlToComponents = (xml) => (
  xml.map((blueprint) => ({
    subtype: blueprint.Result[0].$.SubtypeId,
    name: blueprint.DisplayName[0],
    recipe: blueprint.Prerequisites[0].Item.map((item) => ({
      subtype: item.$.SubtypeId,
      count: item.$.Amount,
    })),
  }))
);

const parseComponents = async (gameFolder) => {
  console.log('parsing components');
  const xml = await readXmlFile(`${gameFolder}/Content/Data/Blueprints.sbc`);
  const filteredXml = filterXml(xml);
  return mapXmlToComponents(filteredXml);
};

export default parseComponents;
