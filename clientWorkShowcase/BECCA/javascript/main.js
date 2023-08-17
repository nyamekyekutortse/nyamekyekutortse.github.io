alert("Project in progress\nCurrent results may differ from finished product\n68% complete\nOrange Areas - appearance to be changed \nRed Areas - not functioning\nRecently updated to add calculations");

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

function printPage() {
    window.print();
  }