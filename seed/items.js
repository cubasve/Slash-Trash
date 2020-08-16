// the alternatives list includes the value for the "swap" property of the corresponding alternative,
// this property is used to find the proper alternative document in mongo because it is considered unique

module.exports = [
  {
    houseItem: 'Pan',
    problem: '',
    category: 'Kitchen',
    image: '',
    alternatives: ['Cast Iron', 'Stainless Steel', 'Enameled Cast Iron'],
  },
  {
    houseItem: 'Shampoo',
    problem: '',
    category: 'Bathroom',
    image: '',
    alternatives: ['Refill', 'Bar', 'Buy in Bulk', 'Terracycle Program'],
  },
  {
    houseItem: 'Clothing',
    problem: 'Textile waste is a cause of pollution and synthetic clothing sheds microplastics into waterways when washed.',
    category: 'Bedroom',
    image: '',
    alternatives: ['Second-Hand', 'Natural Fabrics', 'Repair', 'Borrow'],
  },
  {
    houseItem: 'Pencil',
    problem: '',
    category: 'Workspace',
    image: '',
    alternatives: ['Wooden Pencil', 'Stainless Steel Mechanical Pencil'],
  },
  {
    houseItem: 'Razor',
    problem: 'Disposable razors have a lifespan of about 3 months, and then they are discarded to end up in landfills.',
    category: 'Bathroom',
    image: '',
    alternatives: ['Stainless steel', 'Sugaring', 'Thread', 'Terracycle Program'],
  },
  {
    houseItem: 'Period/Tampons/Pads',
    problem: 'They are single-use items that ',
    category: 'Bathroom',
    image: '',
    alternatives: ['Menstrual cup', 'Cotton tampon', 'Reusable pad', 'Period underwear']
  },
  {
    houseItem: 'Gift wrap',
    problem: 'It is thrown away after a gift is opened',
    category: 'Holidays',
    image: '',
    alternatives: ['Furoshiki', 'Box', 'Paper wrapping', 'A gift in a gift']
  }
];
