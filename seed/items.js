// the alternatives list includes the value for the "swap" property of the corresponding alternative,
// this property is used to find the proper alternative document in mongo because it is considered unique

module.exports = [
  {
    houseItem: 'Pan',
    category: 'Kitchen',
    alternatives: ['Cast Iron', 'Stainless Steel', 'Enameled Cast Iron'],
  },
  {
    houseItem: 'Shampoo',
    category: 'Bathroom',
    alternatives: ['Refill', 'Bar', 'Buy in Bulk', 'Terracycle Program'],
  },
  {
    houseItem: 'Clothing',
    category: 'Bedroom',
    alternatives: ['Second-Hand', 'Natural Fabrics', 'Repair', 'Borrow'],
  },
  {
    houseItem: 'Pencil',
    category: 'Workspace',
    alternatives: ['Wooden Pencil', 'Stainless Steel Mechanical Pencil'],
  },
  {
    houseItem: 'Couch',
    category: 'Living Room',
    alternatives: ['Natural Fabrics', 'Repair', 'Second-Hand'],
  },
];
