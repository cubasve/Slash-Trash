exports.householdItem = [
  {id: 01, housItem: 'Pan', category: 'Kitchen', alternatives: ['iro', 'sst', 'ena'] }, //1
  {id: 02, housItem: 'Shampoo', category: 'Bathroom', alternatives: ['ref', 'bar', 'bul', 'ter' ]}, //2
  {id: 03, housItem: 'Clothing', category: 'Bedroom', alternatives: ['sec', 'fab', 'rep', 'bor']}, //3
  {id: 04, housItem: 'Pencil', category: 'Workspace', alternatives: ['wpe', 'smp']}, //4
	{id: 05, housItem: 'Couch', category: 'Living room', alternatives: ['fab', 'rep']}, //5
];
/*Want to include:
- Dish sponge: natural loofah (gourd), rag, wooden scrub, copper scrubbers, 
- Hair removal: sugaring, razor (stainless steel or Terracycle), epilator, threading, hair trimmer
- Plastic/Saran wrap: beeswax wraps, put food into a container with lid, put a plate on top of bowl, silicone wraps,  cloth bowl covers, 
 */

 /*
 MATERIALS TO FOCUS ON:
 - Bamboo, stainless steel, glass, paper/wood, aluminum, silicone, cotton, ceramic, 
 */


exports.ecoAlternative = [
  {
    id: 'iro', // Teflon/non-stick pan
    swap: 'Cast iron', 
    description: 'Will last you a lifetime. Why is it a better option though Eva?' //1
  }, //1
  {
    id: 'sst', //Stainless STeel
    swap: 'Stainless steel', 
    description: '',
  }, //1
    //NEXT STEP: {swap: 'Stainless steel ${householdItem.title}} --> shows 'Stainless steel pan'
  {
    id: 'ena',
    swap: 'Enameled cast iron', 
    description: 'For the people who think cast iron is too high maintenance.', //1
  }, //1
  {
    id: 'ref',
    swap: 'Refill', 
    description: 'Bring your own container to refill at stores or buy pre-packaged in a glass jar where you can return it.', //2
  }, //2
  {
    id: 'bar',
    swap: 'Bar', 
    description: 'Package-free, solid bar', //2
  }, //2
  {
    id: 'bul',
    swap: 'Buy in bulk', 
    description: 'Buying in larger sizes reduces the amount of packaging', //2
  }, //2
  {
    id: 'ter',
    swap: 'Terracycle Program', 
    description: 'Provides programs for consumers to dispose of their waste responsibly.', //2 //4
  }, //2 //4
	//Terracycle --> pens, skincare products, razors, Brita filter, detergent, electronics, cleaning
  {
    id: 'sec',
    swap: 'Second-hand', 
    description: 'Thrift shops, Hand-me downs, etc.', //3
  }, //3
  {
    id: 'fab',
    swap: 'Natural fabrics', 
    description: 'Avoid synthetic fabrics that shed microplastics when washed (e.g. polyester, acrylic, nylon). Choose cotton, linen, wool, cashmere, silk, hemp, bamboo, leather. ', //3 //5
  }, //3 //5
  {
    id: 'rep',
    swap: 'Repair', 
    description: 'Mend, darn, felt, hem, or patch up the piece of fabric instead of discarding it.', //3 //5
  }, //3 //5
  {
    id: 'bor',
    swap: 'Borrow', 
    description: 'Borrow a piece of clothing from a family member/friend if you\'re only going to wear it once.', //3
  }, //3
  {
    id: 'wpe', //Wooden PEncil
    swap: 'Wooden pencil', 
    description: 'Wood is compostable.', //4
  }, //4
  {
    id: 'smp', //Steel Mechanical Pencil
    swap: 'Stainless steel mechanical pencil', 
    description: 'Stainless steel is a high-value material and can be reused.', //4
  }, //4
];
