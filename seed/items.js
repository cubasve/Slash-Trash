// the alternatives list includes the value for the "swap" property of the corresponding alternative,
// this property is used to find the proper alternative document in mongo because it is considered unique

module.exports = [
  {
    houseItem: 'Pan',
    problem: 'Non-stick pans have a layer of teflon that is gradually removed with use and leaches into the food',
    category: 'Kitchen',
    alternatives: ['Cast Iron', 'Stainless Steel', 'Enameled Cast Iron'],
  },
  {
    houseItem: 'Shampoo',
    problem: 'Bottles are used up every few months and are likely not recycled because it is more expensive to recycle used plastic.',
    category: 'Bathroom',
    alternatives: ['Refill', 'Bar', 'Buy in Bulk', 'Terracycle Program'],
  },
  {
    houseItem: 'Conditioner',
    problem: 'Bottles are used up every few months and are likely not recycled because it is more expensive to recycle used plastic.',
    category: 'Bathroom',
    alternatives: ['Refill', 'Bar', 'Buy in Bulk', 'Terracycle Program'],
  },
  {
    houseItem: 'Body Wash',
    problem: 'Bottles are used up every few months and are likely not recycled because it is more expensive to recycle used plastic.',
    category: 'Bathroom',
    alternatives: ['Refill', 'Bar', 'Buy in Bulk', 'Terracycle Program'],
  },
  {
    houseItem: 'Dish Soap',
    problem: 'Bottles are used up every few months and are likely not recycled because it is more expensive to recycle used plastic.',
    category: 'Bathroom',
    alternatives: ['Refill', 'Bar', 'Buy in Bulk', 'Terracycle Program'],
  },
  {
    houseItem: 'Lotion/Cream/Moisturizer',
    problem: 'Bottles are used up every few months and are likely not recycled because it is more expensive to recycle used plastic.',
    category: 'Bathroom',
    alternatives: ['Refill', 'Bar', 'Buy in Bulk', 'Terracycle Program'],
  },
  {
    houseItem: 'Clothing',
    problem: 'Textile waste is a cause of pollution and synthetic clothing sheds microplastics into waterways when washed.',
    category: 'Bedroom',
    alternatives: ['Second-Hand', 'Natural Fabrics', 'Repair', 'Borrow/Rent'],
  },
  {
    houseItem: 'Pencil',
    problem: '',
    category: 'Workspace',
    alternatives: ['Wooden Pencil', 'Stainless Steel Mechanical Pencil'],
  },
  {
    houseItem: 'Razor',
    problem: 'Disposable razors have a lifespan of about 3 months, and then they are discarded to end up in landfills.',
    category: 'Bathroom',
    alternatives: ['Reusable Razor', 'Sugaring', 'Thread', 'Terracycle Program', 'Laser hair removal', 'Tweezers', 'Electric shaver/Epilator'],
  },
  {
    houseItem: 'Period/Tampons/Pads',
    problem: 'Disposable menstrual products are single-use items that contribute to our landfills.',
    category: 'Bathroom',
    alternatives: ['Menstrual cup', 'Cotton tampon', 'Reusable pad', 'Period underwear']
  },
  {
    houseItem: 'Gift wrap',
    problem: 'Gift wrap is thrown away after a gift is opened and is often not recycleable since it has a coating of plastic.',
    category: 'Holidays',
    alternatives: ['Furoshiki', 'Container', 'A gift in a gift']
  },
  {
    houseItem: 'Eyes',
    problem: '',
    category: 'Bathroom',
    alternatives: ['Laser Eye Surgery', 'Glasses', 'Contact lenses']
  },
  {
    houseItem: 'Cosmetics/Makeup',
    problem: '',
    category: 'Bathroom',
    alternatives: ['Cosmetic Brands', 'Packaging', 'Terracycle Program']
  },
  {
    houseItem: 'Gift/Present',
    problem: '',
    category: 'Holidays',
    alternatives: ['Experiences', 'Your time', 'Services', 'Digital gifts', 'Consumables', 'Cash', 'Household goods']
  },
];
