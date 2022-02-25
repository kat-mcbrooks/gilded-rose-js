const Item = require("../src/item.js");

describe("Item", () => {
    const item = new Item("item", 5, 5)

  it("has a name, quality and sellIn", () => {
    console.log(item)
    expect(item.name).toBe("item")
  })
})