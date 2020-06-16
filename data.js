/*PROBLEMS WITH DATA.JS
- ReferenceError: Cannot access 'castIronID' before initialization
    --> I have to put variables for ecoAlternatives (ex. castIronID) before householdItems
- ReferenceError: Cannot access 'uuidv1' before initialization
    --> const { v1: uuidv1} = require('uuid') has to be at the top of the page
- ReferenceError: ObjectId is not defined
    --> ObjectId is for mongoose model (data.js is a JS file, not mongoose file)--> I said the id type would be a string
    --> uuidv1() function returns a string 
*/
// require("mongoose").Types.ObjectId;
// const ObjectId = require("mongoose").Types.ObjectId;
// const { v1: uuidv1 } = require("uuid"); //Creates random strings of ObjectIds for items & alternatives
// uuidv1(); ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed' --> string is returned from function

//create variable from uuid() holds value of uuid
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

//array (ecoAlternative)--> objects (each swap) --> key:value pairs (id, swap, description)
const ecoAlternative = [
  {
    // _id: castIronID, //Teflon, non-stick pan
    swap: "Cast Iron",
    description:
      "Non-stick pans have a layer of teflon that is gradually removed with use and leaches into the food. Cast iron can be used in the stovetop or oven and will last you a lifetime.",
  }, //1
  {
    // _id: stainlessSteelID,
    swap: "Stainless Steel",
    description:
      "Stainless steel is a high-value material. There is a high chance it will be recycled and reused.",
  }, //1
  //NEXT STEP: {swap: 'Stainless steel ${householdItem.title}} --> shows 'Stainless steel pan'
  {
    // _id: enameledCastIronID,
    swap: "Enameled Cast Iron",
    description:
      "Cast iron must be seasoned/oiled so it remains non-stick. Enameled cast iron is a lower-maintenance option.",
  }, //1
  {
    // _id: refillID,
    swap: "Refill",
    description:
      "Bring your own container to refill at stores or buy pre-packaged in a glass jar where you can return it.",
  }, //2
  {
    // _id: barID,
    swap: "Bar",
    description: "Package-free, solid bar",
  }, //2
  {
    // _id: bulkID,
    swap: "Buy in Bulk",
    description: "Buying in larger sizes reduces the amount of packaging",
  }, //2
  {
    // _id: terracycleID,
    swap: "Terracycle Program",
    description:
      "Provides programs for consumers to dispose of their waste responsibly.",
  }, //2 //4
  //Terracycle --> pens, skincare products, razors, Brita filter, detergent, electronics, cleaning
  {
    // _id: secondHandID,
    swap: "Second-Hand",
    description: "Thrift shops, Hand-me downs, etc.",
  }, //3
  {
    // _id: naturalFabricID,
    swap: "Natural Fabrics",
    description:
      "Avoid synthetic fabrics that shed microplastics when washed (e.g. polyester, acrylic, nylon). Choose cotton, linen, wool, cashmere, silk, hemp, bamboo, leather. ",
  }, //3 //5
  {
    // _id: repairID,
    swap: "Repair",
    description:
      "Mend, darn, felt, hem, or patch up the piece of fabric instead of discarding it.",
  }, //3 //5
  {
    // _id: borrowID,
    swap: "Borrow",
    description:
      "Borrow from a family member/friend if you're only going to wear it once.",
  }, //3
  {
    // _id: woodenPencilID,
    swap: "Wooden Pencil",
    description: "Wood is compostable.",
  }, //4
  {
    // _id: ssMechPencilID,
    swap: "Stainless Steel Mechanical Pencil",
    description:
      "Stainless steel is a high-value material. There is a high chance it will be recycled and reused.",
  }, //4 --> should I remove this and just use stainlessSteelID?
];

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

//------------------------------------------------------

// module.exports = {
//   getAll,
// }

// function getAll(){
//   return householdItem;
// }
//object - array - object
const householdItem = [
  {
    // _id: ObjectId(uuidv1()), --> says ObjectId() is not defined
    // _id: Schema.Types.ObjectId(uuidv1()), --> didn't work
    //mongoose generates its own token
    houseItem: "Pan",
    category: "Kitchen",
    alternatives: [castIronID, stainlessSteelID, enameledCastIronID],
  }, //1
  {
    houseItem: "Shampoo",
    category: "Bathroom",
    alternatives: [refillID, barID, bulkID, terracycleID],
  },
  {
    houseItem: "Clothing",
    category: "Bedroom",
    alternatives: [secondHandID, naturalFabricID, repairID, borrowID],
  }, //3
  {
    houseItem: "Pencil",
    category: "Workspace",
    alternatives: [woodenPencilID, ssMechPencilID],
  }, //4
  {
    houseItem: "Couch",
    category: "Living room",
    alternatives: [naturalFabricID, repairID, secondHandID],
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
  householdItem,
  ecoAlternative,
};
