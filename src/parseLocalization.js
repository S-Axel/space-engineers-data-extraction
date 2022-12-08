import readXmlFile from './readXmlFile.js';

const l10nFiles = {
  en: 'MyTexts.resx',
};

const formatXmlTranslations = (xml) => (
  xml.root.data.map(
    (xmlTranslation) => ({
      name: xmlTranslation.$.name,
      value: xmlTranslation.value[0],
    })
  )
);

const translateGameObjectCollection = (xmlTranslations, collection) => {
  const translations = {};
  collection.forEach((gameObject) => {
    const translation = xmlTranslations.find((xmlTranslation) => xmlTranslation.name === gameObject.name);
    if (translation) {
      translations[gameObject.name] = translation.value;
    }
  });
  return translations;
};

const translateGameObjectCollections = (lang, xmlTranslations, ingots, components, blocks) => {
  const ingotsTranslations = translateGameObjectCollection(xmlTranslations, Object.values(ingots));
  const componentsTranslations = translateGameObjectCollection(xmlTranslations, Object.values(components));
  const blocksTranslations = translateGameObjectCollection(xmlTranslations, Object.values(blocks));
  return {
    ...ingotsTranslations,
    ...componentsTranslations,
    ...blocksTranslations,
  };
};

const parseLocalization = async (gameFolder, lang, ingots, components, blocks) => {
  console.log(`parsing language ${lang}`);
  const xml = await readXmlFile(`${gameFolder}/Content/Data/Localization/${l10nFiles[lang]}`);
  const xmlTranslations = formatXmlTranslations(xml);
  return translateGameObjectCollections(lang, xmlTranslations, ingots, components, blocks);
};

export default parseLocalization;
