const householdItem = [
  { 
    _id: 01, 
    houseItem: 'Pan', 
    category: 'Kitchen', 
    alternatives: ['iro', 'sst', 'ena'] 
  }, //1
  {
    _id: 02, 
    houseItem: 'Shampoo', 
    category: 'Bathroom', 
    alternatives: ['ref', 'bar', 'bul', 'ter' ]}, //2
  {
    _id: 03, 
    houseItem: 'Clothing', 
    category: 'Bedroom', 
    alternatives: ['sec', 'fab', 'rep', 'bor']}, //3
  {
    _id: 04, 
    houseItem: 'Pencil', 
    category: 'Workspace', 
    alternatives: ['wpe', 'smp']}, //4
	{
    _id: 05, 
    houseItem: 'Couch', 
    category: 'Living room', 
    alternatives: ['fab', 'rep']}, //5
];
/*Want to include:
- Dish sponge: natural loofah (gourd), rag, wooden scrub, copper scrubbers, 
- Hair removal: sugaring, razor (stainless steel or Terracycle), epilator, threading, hair trimmer
- Plastic/Saran wrap: beeswax wraps, put food into a container with lid, put a plate on top of bowl, silicone wraps,  cloth bowl covers, 
 */

 /*
 MATERIALS TO FOCUS ON:
 - Bamboo, stainless steel, glass, paper/wood, aluminum, silicone, cotton, ceramic, metal, copper, cork, linen, plant fibers, stoneware, clay
 */


const ecoAlternative = [
  {
    _id: 'iro', // Teflon/non-stick pan
    swap: 'Cast Iron', 
    description: 'Will last you a lifetime. Why is it a better option though Eva?' 
  }, //1
  {
    _id: 'sst', //Stainless STeel
    swap: 'Stainless Steel', 
    description: '',
  }, //1
    //NEXT STEP: {swap: 'Stainless steel ${householdItem.title}} --> shows 'Stainless steel pan'
  {
    _id: 'ena',
    swap: 'Enameled Cast Iron', 
    description: 'For the people who think cast iron is too high maintenance.', 
  }, //1
  {
    _id: 'ref',
    swap: 'Refill', 
    description: 'Bring your own container to refill at stores or buy pre-packaged in a glass jar where you can return it.', 
  }, //2
  {
    _id: 'bar',
    swap: 'Bar', 
    description: 'Package-free, solid bar', 
  }, //2
  {
    _id: 'bul',
    swap: 'Buy in Bulk', 
    description: 'Buying in larger sizes reduces the amount of packaging', 
  }, //2
  {
    _id: 'ter',
    swap: 'Terracycle Program', 
    description: 'Provides programs for consumers to dispose of their waste responsibly.', 
  }, //2 //4
	//Terracycle --> pens, skincare products, razors, Brita filter, detergent, electronics, cleaning
  {
    _id: 'sec',
    swap: 'Second-Hand', 
    description: 'Thrift shops, Hand-me downs, etc.', 
  }, //3
  {
    _id: 'fab',
    swap: 'Natural Fabrics', 
    description: 'Avoid synthetic fabrics that shed microplastics when washed (e.g. polyester, acrylic, nylon). Choose cotton, linen, wool, cashmere, silk, hemp, bamboo, leather. ', 
  }, //3 //5
  {
    _id: 'rep',
    swap: 'Repair', 
    description: 'Mend, darn, felt, hem, or patch up the piece of fabric instead of discarding it.', 
  }, //3 //5
  {
    _id: 'bor',
    swap: 'Borrow', 
    description: 'Borrow a piece of clothing from a family member/friend if you\'re only going to wear it once.', 
  }, //3
  {
    _id: 'wpe', //Wooden PEncil
    swap: 'Wooden Pencil', 
    description: 'Wood is compostable.', 
  }, //4
  {
    _id: 'smp', //Steel Mechanical Pencil
    swap: 'Stainless Steel Mechanical Pencil', 
    description: 'Stainless steel is a high-value material. There is a high chance it will be recycled and reused.', 
  }, //4
];
