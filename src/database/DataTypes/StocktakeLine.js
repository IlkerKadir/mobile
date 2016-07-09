import Realm from 'realm';

export class StocktakeLine extends Realm.Object {
  get snapshotTotalQuantity() {
    return this.snapshotNumberOfPacks * this.packSize;
  }

  get countedTotalQuantity() {
    return this.countedNumberOfPacks * this.packSize;
  }

  get itemId() {
    if (!this.itemLine) return '';
    return this.itemLine.item ? this.itemLine.item.id : '';
  }

  set countedTotalQuantity(quantity) {
    this.countedNumberOfPacks = quantity / this.packSize;
  }

  /**
   * Returns the maximum amount of the given quantity that can be allocated to this line.
   * N.B. quantity may be positive or negative.
   * @param  {double} quantity Quantity to allocate (can be positive or negative)
   * @return {double}          The maximum that can be allocated
   */
  getAmountToAllocate(quantity) {
    // Max that can be removed is the total quantity currently in the associated item line
    if (quantity < 0) return Math.max(quantity, -this.itemLine.totalQuantity);
    // There is no maximum amount that can be added
    return quantity;
  }
}