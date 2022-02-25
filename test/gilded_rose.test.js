const Shop = require("../src/gilded_rose.js");

describe("Shop", () => {
  beforeEach(() => {
    const regularItemMock = {
      name: "item",
      sellIn: 5,
      quality: 5,
    };

  const agedBrieMock = {
    name: "Aged Brie",
    sellIn: 3,
    quality: 5,
  };
  const sulfurasMock = {
    name: "Sulfuras, Hand of Ragnaros",
    sellIn: 10,
    quality: 80,
  };

  const backstageMock = {
    name: "Backstage passes to a TAFKAL80ETC concert",
    sellIn: 10,
    quality: 20,
  };

  const conjuredMock = {
    name: "Conjured Mana Cake",
    sellIn: 10,
    quality: 20,
  };

  const items = [
    regularItemMock,
    agedBrieMock, 
    sulfurasMock,
    backstageMock, 
    conjuredMock
  ]

  shop = new Shop(items);
  // console.log(shop)
  });
  describe('update quality', () => {

    // console.log(shop)
    it('does not change name of item', () => {
      const items = shop.updateQuality();
      expect(items[0].name).toBe("item");
    });

    it('decreases regular item quality by 1', () => {
      const items = shop.updateQuality();
      expect(items[0].quality).toBe(4);
    });

  })

  describe('reduce sellIn', () => {
    
    it('reduces regular item sell in by 1', () => {
      const items = shop.reduceSellIn();
      expect(items[0].sellIn).toBe(4);
    });

    it('decreases special item sellIn by 1', () => {
      const items = shop.reduceSellIn();
      expect(items[1].sellIn).toBe(2);
    });
  })

});
