import readXmlFile from './readXmlFile.js';

const mapXmlToBlock = (xml) => (
  xml.Definitions.CubeBlocks[0].Definition.map((block) => ({
    typeId: block.Id[0].TypeId[0],
    subtypeId: block.Id[0].SubtypeId[0],
    displayName: block.DisplayName[0],
    size: block.CubeSize[0],
    pcu: block.PCU ? block.PCU[0] : '0',
    recipe: block.Components[0].Component.map((component) => ({
      subtypeId: component.$.Subtype,
      amount: component.$.Count,
    })),
  }))
);

const parseBlocksOfFile = async (filePath) => {
  const xml = await readXmlFile(filePath);
  return mapXmlToBlock(xml);
};

const files = [
  '/Content/Data/CubeBlocks/CubeBlocks.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Armor.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Armor_2.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Armor_3.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_ArmorPanels.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Automation.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Communications.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Control.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_DecorativePack.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_DecorativePack2.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Doors.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Economy.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Energy.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Extras.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Frostbite.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Gravity.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_IndustrialPack.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Interiors.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_LCDPanels.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Lights.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Logistics.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Mechanical.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Medical.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Production.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_ScrapRacePack.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_SparksOfTheFuturePack.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Symbols.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Thrusters.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Tools.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Utility.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Warfare1.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Warfare2.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Weapons.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Wheels.sbc',
  '/Content/Data/CubeBlocks/CubeBlocks_Windows.sbc',
];

const parseBlocks = async (gameFolder) => {
  let blocks = [];
  for (let i = 0; i < files.length; i++) {
    blocks = blocks.concat(await parseBlocksOfFile(`${gameFolder}${files[i]}`));
  }
  return blocks;
};

export default parseBlocks;
