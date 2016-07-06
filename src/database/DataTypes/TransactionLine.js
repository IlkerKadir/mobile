import Realm from 'realm';

export class TransactionLine extends Realm.Object {

  destructor() {
    this.totalQuantity = 0; // Ensure it reverts any stock changes to item lines
  }

  get totalQuantity() {
    return this.numberOfPacks * this.packSize;
  }

  set totalQuantity(quantity) {
    if (this.transaction.isFinalised) {
      throw new Error('Cannot change quantity of lines in a finalised transaction');
    }

    const difference = quantity - this.totalQuantity;
    this.numberOfPacks = this.packSize ? quantity / this.packSize : 0;

    if (this.transaction.isConfirmed) {
      if (this.transaction.isCustomerInvoice) {
        this.itemLine.totalQuantity -= difference;
      } else if (this.transaction.isSupplierInvoice) {
        this.itemLine.totalQuantity += difference;
      }
    }
  }

  get totalQuantitySent() {
    return this.numberOfPacksSent * this.packSize;
  }

  get totalPrice() {
    if (!this.numberOfPacks) return 0;
    if (this.type === 'customer_invoice') {
      if (!this.sellPrice) return 0;
      return this.sellPrice * this.numberOfPacks;
    }
    // Must be a supplier invoice
    if (!this.costPrice) return 0;
    return this.costPrice * this.numberOfPacks;
  }

  /**
   * Returns the maximum amount of the given quantity that can be allocated to this line.
   * N.B. quantity may be positive or negative.
   * @param  {double} quantity Quantity to allocate (can be positive or negative)
   * @return {double}          The maximum that can be allocated
   */
  getAmountToAllocate(quantity) {
    // Max that can be removed is the total quantity currently in the transaction line
    if (quantity < 0) return Math.max(quantity, -this.totalQuantity);
    // For customer invoice, max that can be added is amount in item line
    if (this.transaction.isCustomerInvoice) return Math.min(quantity, this.itemLine.totalQuantity);
    // For supplier invoice, there is no maximum amount that can be added
    return quantity;
  }

}
