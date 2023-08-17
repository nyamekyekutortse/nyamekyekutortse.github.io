//get defaults
console.log("gettingDefaults");
//defaults for material invoice
let baseRow = document.getElementById("baseRow");
let baseRowCells = baseRow.cells;
//defaults for pool equipment invoice
let baseEquipmentRow = document.getElementById("equipmentBaseRow");
let eRowCells = baseEquipmentRow.cells;
//defaults for tiling invoice
let baseTilingRow = document.getElementById("tilingBaseRow");
let tRowCells = baseTilingRow.cells;
//defaults for labor invoice
let baseLaborRow = document.getElementById("laborBaseRow");
let lRowCells = baseLaborRow.cells;
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

function addPoolEquipment()
{
    console.log("call to addMaterialItem");
    let equipmentTable = document.getElementById("poolEquipmentTable");
    let allRows = equipmentTable.getElementsByTagName("tr");
    let newRow = equipmentTable.insertRow(allRows.length - 1);
    newRow.className = "";
    let cell1 = newRow.insertCell(0); // Insert new cells into the new row
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);


    cell1.innerHTML = eRowCells[0].innerHTML;
    cell1.className = "descriptionEntry";
    console.log(cell1.parentElement.className);
    cell2.innerHTML = eRowCells[1].innerHTML;
    cell2.className = "materialEntry";
    cell3.innerHTML = eRowCells[2].innerHTML; 
    cell3.className = "quantityEntry";
    cell4.innerHTML = eRowCells[3].innerHTML; 
    cell4.className = "unitPrices";
    cell5.innerHTML = eRowCells[4].innerHTML;
    cell5.className = "totalEntry";

    console.log("complete");
}

function addTilingMaterial()
{
    console.log("call to addMaterialItem");
    let tilingTable = document.getElementById("tilingTable");
    let allRows = tilingTable.getElementsByTagName("tr");
    let newRow = tilingTable.insertRow(allRows.length - 1);
    newRow.className = "";
    let cell1 = newRow.insertCell(0); // Insert new cells into the new row
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);


    cell1.innerHTML = tRowCells[0].innerHTML;
    cell1.className = "descriptionEntry";
    console.log(cell1.parentElement.className);
    cell2.innerHTML = tRowCells[1].innerHTML;
    cell2.className = "materialEntry";
    cell3.innerHTML = tRowCells[2].innerHTML; 
    cell3.className = "quantityEntry";
    cell4.innerHTML = tRowCells[3].innerHTML; 
    cell4.className = "unitPrices";
    cell5.innerHTML = tRowCells[4].innerHTML;
    cell5.className = "totalEntry";

    console.log("complete");
}

function addLaborEntry()
{
    console.log("call to addLaborEntry");
    let laborTable = document.getElementById("laborTable");
    let allRows = laborTable.getElementsByTagName("tr");
    let newRow = laborTable.insertRow(allRows.length - 1);
    newRow.className = "";
    let cell1 = newRow.insertCell(0); // Insert new cells into the new row
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = lRowCells[0].innerHTML;
    cell1.className = "descriptionEntry";
    console.log(cell1.parentElement.className);
    cell2.innerHTML = lRowCells[1].innerHTML;
    cell2.className = "totalEntry";

    console.log("complete");
}