function seedEvents(req, res) {
  const ecoAlternative = [
    {
      swap: "Cast Iron",
      description:
        "Non-stick pans have a layer of teflon that is gradually removed with use and leaches into the food. Cast iron can be used in the stovetop or oven and will last you a lifetime.",
    }, //1
    {
      swap: "Stainless Steel",
      description:
        "Stainless steel is a high-value material. There is a high chance it will be recycled and reused.",
    },
    {
      swap: "Enameled Cast Iron",
      description:
        "Cast iron must be seasoned/oiled so it remains non-stick. Enameled cast iron is a lower-maintenance option.",
    }, //1
    {
      swap: "Refill",
      description:
        "Bring your own container to refill at stores or buy pre-packaged in a glass jar where you can return it.",
    }, //2
    {
      swap: "Bar",
      description: "Package-free, solid bar",
    }, //2
    {
      swap: "Buy in Bulk",
      description: "Buying in larger sizes reduces the amount of packaging",
    }, //2
    {
      swap: "Terracycle Program",
      description:
        "Provides programs for consumers to dispose of their waste responsibly.",
    }, //2 //4
    {
      swap: "Second-Hand",
      description: "Thrift shops, Hand-me downs, etc.",
    }, //3
    {
      swap: "Natural Fabrics",
      description:
        "Avoid synthetic fabrics that shed microplastics when washed (e.g. polyester, acrylic, nylon). Choose cotton, linen, wool, cashmere, silk, hemp, bamboo, leather. ",
    }, //3 //5
    {
      swap: "Repair",
      description:
        "Mend, darn, felt, hem, or patch up the piece of fabric instead of discarding it.",
    }, //3 //5
    {
      swap: "Borrow",
      description:
        "Borrow from a family member/friend if you're only going to wear it once.",
    }, //3
    {
      swap: "Wooden Pencil",
      description: "Wood is compostable.",
    }, //4
    {
      swap: "Stainless Steel Mechanical Pencil",
      description:
        "Stainless steel is a high-value material. There is a high chance it will be recycled and reused.",
    },
  ];

  //use Event model to insert/save
  for (event of events) {
    const newEvent = new Event(event);
    newEvent.save();
  }

  //seeded!
  res.send("Database seeded!");
}
