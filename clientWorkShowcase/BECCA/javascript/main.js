class InvoiceItems
{
    itemName;
    itemUnit;
    itemCategory;

    InvoiceItems(itemString)
    {
        let itemSplit = itemString.split(',');
        this.itemName = itemSplit[0];
        this.itemUnit = itemSplit[1];
        this.itemCategory = itemSplit[2];
    }
}

