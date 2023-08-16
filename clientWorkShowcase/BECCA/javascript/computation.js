//get defaults
console.log("gettingDefaults");
let baseRow = document.getElementById("baseRow");
let baseRowCells = baseRow.cells;
function addMaterialItem()
{
    console.log("call to addMaterialItem");
    let materialTable = document.getElementById("materialTable");
    let allRows = materialTable.getElementsByTagName("tr");
    let newRow = materialTable.insertRow(allRows.length - 1);
    newRow.className = "";
    let cell1 = newRow.insertCell(0); // Insert new cells into the new row
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);


    cell1.innerHTML = baseRowCells[0].innerHTML;
    cell1.className = "descriptionEntry";
    console.log(cell1.parentElement.className);
    cell2.innerHTML = baseRowCells[1].innerHTML;
    cell2.className = "materialEntry";
    cell3.innerHTML = baseRowCells[2].innerHTML; 
    cell3.className = "quantityEntry";
    cell4.innerHTML = baseRowCells[3].innerHTML; 
    cell4.className = "unitPrices";
    cell5.innerHTML = baseRowCells[4].innerHTML;
    cell5.className = "totalEntry";

    console.log("complete");
}