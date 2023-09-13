import { Item } from "./items-model";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items.map(it => Item.createItem(it));
  }

  updateQuality(): Array<Item> {
    this.items.forEach(item => item.updateQuality());
    return this.items
  }
}
