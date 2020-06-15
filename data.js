/*PROBLEMS WITH DATA.JS
- ReferenceError: Cannot access 'castIronID' before initialization
    --> I have to put variables for ecoAlternatives (ex. castIronID) before householdItems
- ReferenceError: Cannot access 'uuidv4' before initialization
    --> const { v4: uuidv4} = require('uuid') has to be at the top of the page
-ReferenceError: ObjectId is not defined
    --> ObjectId is for mongoose model (data.js is a JS file, not mongoose file)--> I said the id type would be a string
    --> uuidv4() function returns a string 

*/

const { v4: uuidv4 } = require('uuid'); //Creates random strings of ObjectIds for items & alternatives
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed' --> string is returned from function

//create variable from uuid() holds value of uuid
const castIronID = uuidv4(); 
const stainlessSteelID = uuidv4();
const enameledCastIronID = uuidv4();
const refillID = uuidv4();
const barID = uuidv4();
const bulkID = uuidv4();
const terracycleID = uuidv4();
const secondHandID = uuidv4();
const naturalFabricID = uuidv4();
const repairID = uuidv4();
const borrowID = uuidv4();
const woodenPencilID = uuidv4();
const ssMechPencilID = uuidv4();

module.exports = { //array (ecoAlternative)--> objects (each swap) --> key:value pairs (id, swap, description)
  ecoAlternative: [
    {
      // _id: ObjectId(castIronID), // Teflon/non-stick pan
      _id: castIronID,
      //search by field instead of id
      swap: 'Cast Iron', 
      description: '', 
    }, //1
    {
      // _id: ObjectId(stainlessSteelID),
      _id: stainlessSteelID,
      swap: 'Stainless Steel', 
      description: '',
    }, //1
      //NEXT STEP: {swap: 'Stainless steel ${householdItem.title}} --> shows 'Stainless steel pan'
    {
      // _id: ObjectId(enameledCastIronID),
      _id: enameledCastIronID,
      swap: 'Enameled Cast Iron', 
      description: '', 
    }, //1
    {
      // _id: ObjectId(refillID),
      _id: refillID,
      swap: 'Refill', 
      description: 'Bring your own container to refill at stores or buy pre-packaged in a glass jar where you can return it.', 
    }, //2
    {
      // _id: ObjectId(barID),
      _id: barID,
      swap: 'Bar', 
      description: 'Package-free, solid bar', 
    }, //2
    {
      // _id: ObjectId(bulkID),
      _id: bulkID,
      swap: 'Buy in Bulk', 
      description: 'Buying in larger sizes reduces the amount of packaging', 
    }, //2
    {
      // _id: ObjectId(terracycleID),
      _id: terracycleID,
      swap: 'Terracycle Program', 
      description: 'Provides programs for consumers to dispose of their waste responsibly.', 
    }, //2 //4
    //Terracycle --> pens, skincare products, razors, Brita filter, detergent, electronics, cleaning
    {
      // _id: ObjectId(secondHandID),
      _id: secondHandID,
      swap: 'Second-Hand', 
      description: 'Thrift shops, Hand-me downs, etc.', 
    }, //3
    {
      // _id: ObjectId(naturalFabricID),
      _id: naturalFabricID,
      swap: 'Natural Fabrics', 
      description: 'Avoid synthetic fabrics that shed microplastics when washed (e.g. polyester, acrylic, nylon). Choose cotton, linen, wool, cashmere, silk, hemp, bamboo, leather. ', 
    }, //3 //5
    {
      // _id: ObjectId(repairID),
      _id: repairID,
      swap: 'Repair', 
      description: 'Mend, darn, felt, hem, or patch up the piece of fabric instead of discarding it.', 
    }, //3 //5
    {
      // _id: ObjectId(borrowID),
      _id: borrowID,
      swap: 'Borrow', 
      description: 'Borrow from a family member/friend if you\'re only going to wear it once.', 
    }, //3
    {
      // _id: ObjectId(woodenPencilID),
      _id: woodenPencilID,
      swap: 'Wooden Pencil', 
      description: 'Wood is compostable.', 
    }, //4
    {
      // _id: ObjectId(ssMechPencilID),
      _id: ssMechPencilID,
      swap: 'Stainless Steel Mechanical Pencil', 
      description: 'Stainless steel is a high-value material. There is a high chance it will be recycled and reused.', 
    }, //4
  ]
}
//NOTE: nodemon says ObjectId 

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
// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

//------------------------------------------------------

// module.exports = {
//   getAll,
// }

// function getAll(){
//   return householdItem;
// }
module.exports = { //object - array - object
  householdItem: [
    { 
      // _id: ObjectId(uuidv4()), --> says ObjectId() is not defined
      // _id: Schema.Types.ObjectId(uuidv4()), --> didn't work
      _id: uuidv4(),
      houseItem: 'Pan', 
      category: 'Kitchen', 
      alternatives: [
        castIronID,
        stainlessSteelID,
        enameledCastIronID,
        // ObjectId(castIronID), //reference string instead of 'iro'
        // ObjectId(stainlessSteelID), 
        // ObjectId(enameledCastIronID),
      ],
    }, //1
    {
      _id: uuidv4(),
      houseItem: 'Shampoo', 
      category: 'Bathroom', 
      alternatives: [
        refillID,
        barID,
        bulkID,
        terracycleID,
        // ObjectId(refillID), 
        // ObjectId(barID), 
        // ObjectId(bulkID),
        // ObjectId(terracycleID),
      ], 
    },
    {
      _id: uuidv4(),
      houseItem: 'Clothing', 
      category: 'Bedroom', 
      alternatives: [
        secondHandID,
        naturalFabricID,
        repairID,
        borrowID,
        // ObjectId(secondHandID), 
        // ObjectId(naturalFabricID), 
        // ObjectId(repairID),
        // ObjectId(borrowID),
      ], 
    }, //3
    {
      _id: uuidv4(),
      houseItem: 'Pencil', 
      category: 'Workspace', 
      alternatives: [
        woodenPencilID,
        ssMechPencilID,
        // ObjectId(woodenPencilID), 
        // ObjectId(ssMechPencilID), 
      ], 
    }, //4
    {
      _id: uuidv4(),
      houseItem: 'Couch', 
      category: 'Living room', 
      alternatives: [
        naturalFabricID,
        repairID,
        secondHandID,
        // ObjectId(naturalFabricID), 
        // ObjectId(repairID), 
        // ObjectId(secondHandID)
      ], 
    }, //5
  ]
}

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

// module.exports = {
//   getAll,
// }

// function getAll(){
//   return ecoAlternative;
// }
