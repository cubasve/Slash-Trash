/*
EXAMPLE FROM MONGODB LECTURE
-----------MAIN: User
  {
    _id: ObjectId("5099803df3f4948bd2e983a4"),
    name: "Joe Smith",
    contacts: [
      ObjectId("5099803df3f4948bd2f98391"),
      ObjectId("5099803df3f4948bd1f97203")
    ]
  }   

----------REFERENCED: Contacts
  {
    _id: ObjectId("5099803df3f4948bd2f98391"),
    type: "mobile",
    contact: "(555) 555-5555"
  }
  {
    _id: ObjectId("5099803df3f4948bd1f97203"),
    type: "email",
    contact: "joe@smith.com"
  }
*/

const { v4: uuidv4 } = require('uuid');
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

//------------------------------------------------------

module.exports = {
  getAll,
}

function getAll(){
  return householdItem;
}

const householdItem = [
  { 
    // _id: 01, 
    _id: ObjectId('001'),
    houseItem: 'Pan', 
    category: 'Kitchen', 
    alternatives: [
      ObjectId('iro'), //reference string instead of 'iro'
      ObjectId('sst'), 
      ObjectId('ena'),
    ] 
  }, //1
  {
    // _id: 02, 
    _id: ObjectId('002'),
    houseItem: 'Shampoo', 
    category: 'Bathroom', 
    alternatives: [
      ObjectId('ref'), 
      ObjectId('bar'), 
      ObjectId('bul'),
      ObjectId('ter'),
    ] 
  },
    // alternatives: ['ref', 'bar', 'bul', 'ter' ]}, //2
  {
    // _id: 03, 
    _id: ObjectId('003'),
    houseItem: 'Clothing', 
    category: 'Bedroom', 
    // alternatives: ['sec', 'fab', 'rep', 'bor'],
    alternatives: [
      ObjectId('sec'), 
      ObjectId('fab'), 
      ObjectId('rep'),
      ObjectId('bor'),
    ] 
  }, //3
  {
    // _id: 04, 
    _id: ObjectId('004'),
    houseItem: 'Pencil', 
    category: 'Workspace', 
    // alternatives: ['wpe', 'smp'],
    alternatives: [
      ObjectId('wpe'), 
      ObjectId('smp'), 
    ] 
  }, //4
	{
    // _id: 05, 
    _id: ObjectId('005'),
    houseItem: 'Couch', 
    category: 'Living room', 
    // alternatives: ['fab', 'rep'],
    alternatives: [
      ObjectId('fab'), 
      ObjectId('rep'), 
    ] 
  }, //5
];


/*Want to include:
- Dish sponge: natural loofah (gourd), rag, wooden scrub, copper scrubbers, 
- Hair removal: sugaring, razor (stainless steel or Terracycle), epilator, threading, hair trimmer
- Plastic/Saran/Cling wrap: beeswax wraps, put food into a container with lid, put a plate on top of bowl, silicone wraps,  cloth bowl covers, 
- Gift wrap paper: furoshiki, reuse old wrapping paper from previous presents, paper bag, gift an experience rather than a tangible item, 
 */

 /*
 MATERIALS TO FOCUS ON:
 - Bamboo, stainless steel, glass, paper/wood, aluminum, silicone, cotton, ceramic, metal, copper, cork, linen, plant fibers, stoneware, clay
 */

module.exports = {
  getAll,
}

function getAll(){
  return ecoAlternative;
}

const ecoAlternative = [
  {
    // _id: 'iro', // Teflon/non-stick pan
    _id: ObjectId('iro'),
    //search by field instead of id
    swap: 'Cast Iron', 
    description: 'Will last you a lifetime. Why is it a better option though Eva?' 
  }, //1
  {
    // _id: 'sst', //Stainless STeel
    _id: ObjectId('sst'),
    swap: 'Stainless Steel', 
    description: '',
  }, //1
    //NEXT STEP: {swap: 'Stainless steel ${householdItem.title}} --> shows 'Stainless steel pan'
  {
    // _id: 'ena',
    _id: ObjectId('ena'),
    swap: 'Enameled Cast Iron', 
    description: 'For the people who think cast iron is too high maintenance.', 
  }, //1
  {
    // _id: 'ref',
    _id: ObjectId('ref'),
    swap: 'Refill', 
    description: 'Bring your own container to refill at stores or buy pre-packaged in a glass jar where you can return it.', 
  }, //2
  {
    // _id: 'bar',
    _id: ObjectId('bar'),
    swap: 'Bar', 
    description: 'Package-free, solid bar', 
  }, //2
  {
    // _id: 'bul',
    _id: ObjectId('bul'),
    swap: 'Buy in Bulk', 
    description: 'Buying in larger sizes reduces the amount of packaging', 
  }, //2
  {
    // _id: 'ter',
    _id: ObjectId('ter'),
    swap: 'Terracycle Program', 
    description: 'Provides programs for consumers to dispose of their waste responsibly.', 
  }, //2 //4
	//Terracycle --> pens, skincare products, razors, Brita filter, detergent, electronics, cleaning
  {
    // _id: 'sec',
    _id: ObjectId('sec'),
    swap: 'Second-Hand', 
    description: 'Thrift shops, Hand-me downs, etc.', 
  }, //3
  {
    // _id: 'fab',
    _id: ObjectId('fab'),
    swap: 'Natural Fabrics', 
    description: 'Avoid synthetic fabrics that shed microplastics when washed (e.g. polyester, acrylic, nylon). Choose cotton, linen, wool, cashmere, silk, hemp, bamboo, leather. ', 
  }, //3 //5
  {
    // _id: 'rep',
    _id: ObjectId('rep'),
    swap: 'Repair', 
    description: 'Mend, darn, felt, hem, or patch up the piece of fabric instead of discarding it.', 
  }, //3 //5
  {
    // _id: 'bor',
    _id: ObjectId('bor'),
    swap: 'Borrow', 
    description: 'Borrow a piece of clothing from a family member/friend if you\'re only going to wear it once.', 
  }, //3
  {
    // _id: 'wpe', //Wooden PEncil
    _id: ObjectId('wpe'),
    swap: 'Wooden Pencil', 
    description: 'Wood is compostable.', 
  }, //4
  {
    // _id: 'smp', //Steel Mechanical Pencil
    _id: ObjectId('smp'),
    swap: 'Stainless Steel Mechanical Pencil', 
    description: 'Stainless steel is a high-value material. There is a high chance it will be recycled and reused.', 
  }, //4
];
