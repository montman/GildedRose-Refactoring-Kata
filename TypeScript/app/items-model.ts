
export class Item {
    constructor(public name: string, public sellIn: number, public quality: number) { }
    updateQuality(): void { };
    static createItem(i: Item): Item {
        if (i.name == 'Backstage passes to a TAFKAL80ETC concert') return new BackStagePass(i.name, i.sellIn, i.quality);
        if (i.name == 'Aged Brie') return new AgedBrie(i.name, i.sellIn, i.quality);
        if (i.name == 'Sulfuras, Hand of Ragnaros') return new Sulfuras(i.name, i.sellIn, i.quality);
        if (i.name == 'Conjured') return new ConjuredItem(i.name, i.sellIn, i.quality);
        return new StandardItem(i.name, i.sellIn, i.quality);
    }
}

export class AgedBrie extends Item {
    updateQuality() {
        if (this.quality < 50) {
            this.quality++;
        }
        this.sellIn--;
    }
}

export class Sulfuras extends Item {
    updateQuality(): void {
        this.quality = 80;
    }
}

export class BackStagePass extends Item {
    updateQuality(): void {
        if (this.sellIn <= 0) {
            this.quality = 0;
        }
        else {
            this.quality++
            if (this.sellIn <= 10) {
                this.quality++
                if (this.sellIn <= 5) {
                    this.quality++
                }
            }
            if (this.quality > 50) this.quality = 50;
        }
        this.sellIn--;
    }
}

export class StandardItem extends Item {

    updateQuality() {
        this.quality--;
        if (this.sellIn <= 0) {
            this.quality--;
        }
        if (this.quality < 0) this.quality = 0;
        this.sellIn--;
    }

}

export class ConjuredItem extends Item {

    updateQuality() {
        this.quality -= 2;
        if (this.sellIn <= 0) {
            this.quality -= 2;
        }
        if (this.quality < 0) this.quality = 0;
        this.sellIn--;
    }

}
