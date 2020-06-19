const castIronID = "castIronID";
const stainlessSteelID = "stainlessSteelID";
const enameledCastIronID = "enameledCastIronID";
const refillID = "refillID";
const barID = "barID";
const bulkID = "bulkID";
const terracycleID = "terracycleID";
const secondHandID = "secondHandID";
const naturalFabricID = "naturalFabricID";
const repairID = "repairID";
const borrowID = "borrowID";
const woodenPencilID = "woodenPencilID";
const ssMechPencilID = "ssMechPencilID";

const ecoAlternative = [
  {
    swap: "Cast Iron",
    description:
      "Non-stick pans have a layer of teflon that is gradually removed with use and leaches into the food. Cast iron can be used in the stovetop or oven and will last you a lifetime.",
  },
  {
    swap: "Stainless Steel",
    description:
      "Stainless steel is a high-value material. There is a high chance it will be recycled and reused.",
  },
  {
    swap: "Enameled Cast Iron",
    description:
      "Cast iron must be seasoned/oiled so it remains non-stick. Enameled cast iron is a lower-maintenance option.",
  },
  {
    swap: "Refill",
    description:
      "Bring your own container to refill at stores or buy pre-packaged in a glass jar where you can return it.",
  },
  {
    swap: "Bar",
    description: "Package-free, solid bar",
  },
  {
    swap: "Buy in Bulk",
    description: "Buying in larger sizes reduces the amount of packaging",
  },
  {
    swap: "Terracycle Program",
    description:
      "Provides programs for consumers to dispose of their waste responsibly.",
  },
  {
    swap: "Second-Hand",
    description: "Thrift shops, Hand-me downs, etc.",
  },
  {
    swap: "Natural Fabrics",
    description:
      "Avoid synthetic fabrics that shed microplastics when washed (e.g. polyester, acrylic, nylon). Choose cotton, linen, wool, cashmere, silk, hemp, bamboo, leather. ",
  },
  {
    swap: "Repair",
    description:
      "Mend, darn, felt, hem, or patch up the piece of fabric instead of discarding it.",
  },
  {
    swap: "Borrow",
    description:
      "Borrow from a family member/friend if you're only going to wear it once.",
  },
  {
    swap: "Wooden Pencil",
    description: "Wood is compostable.",
  },
  {
    swap: "Stainless Steel Mechanical Pencil",
    description:
      "Stainless steel is a high-value material. There is a high chance it will be recycled and reused.",
  },
];

const householdItem = [
  {
    houseItem: "Pan",
    category: "Kitchen",
    alternatives: [castIronID, stainlessSteelID, enameledCastIronID],
  },
  {
    houseItem: "Shampoo",
    category: "Bathroom",
    alternatives: [refillID, barID, bulkID, terracycleID],
  },
  {
    houseItem: "Clothing",
    category: "Bedroom",
    alternatives: [secondHandID, naturalFabricID, repairID, borrowID],
  },
  {
    houseItem: "Pencil",
    category: "Workspace",
    alternatives: [woodenPencilID, ssMechPencilID],
  },
  {
    houseItem: "Couch",
    category: "Living room",
    alternatives: [naturalFabricID, repairID, secondHandID],
  },
];

module.exports = {
  householdItem,
  ecoAlternative,
};
