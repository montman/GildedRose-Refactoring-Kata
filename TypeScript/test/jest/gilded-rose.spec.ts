import { Item, GildedRose, StandardItem } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('Stardard item quality must decrease by one', () => {
    const gildedRose = new GildedRose([new StandardItem('Cards', 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(19);
  });

  it('Stardard item quality must NOT decrease by one if quality is already zero', () => {
    const gildedRose = new GildedRose([new StandardItem('Cards', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('Standart item quality must decrese twice if sellIn days are passed', () => {
    const gildedRose = new GildedRose([new StandardItem('Cards', 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });

  it('Stardard item quality must NOT decrease by one if quality is already zero and sellId days are passed', () => {
    const gildedRose = new GildedRose([new StandardItem('Cards', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('Stardard item and Aged Brie sellIn must decrease by one', () => {
    const gildedRose = new GildedRose([new StandardItem('Cards', 10, 22),new Item('Aged Brie', 20, 11)]);
    const items = gildedRose.updateQuality();
    expect(items.map(e=>e.sellIn)).toStrictEqual([9,19]);
  });

  it('Aged brie quality must increase by one', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(21);
  });

  it('The Quality of an item must never more than 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it('The quality of Backstage passed must increase by 2 when sellIn days lower than 10', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 7, 40)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(42);
  });

  it('The quality of Backstage passed must also never be greater than 50', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 7, 49)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it('The quality of Backstage passed must increase by 3 when sellIn days lower than 5', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 3, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  it('The quality of Backstage passed must be 0 if sellIn days is equal to zero', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('The quality of Sulfuras must not decrease', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 10, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(47);
  });

  it('The quality of Sulfuras must not decrease if the sellIn days are passed', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 0, 47)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(47);
  });


});
