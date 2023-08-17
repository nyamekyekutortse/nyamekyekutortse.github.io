let runningTotal = 0.0;
console.log(runningTotal);
let lastLaborTotal = 0.0;
let lastTilingTotal = 0.0
let lastPoolTotal = 0.0;
let lastMaterialTotal = 0.0;
// Inputs
let runningTotalIn = 0.0;
function calculateTotalLabor()
{
    console.log("call to calculateLabor");
    let laborTotal = 0.0;
    let laborInvoice = document.getElementById("laborTable");
    let entryTotals = laborInvoice.getElementsByClassName("entryTotal");
    let totalInput = document.getElementById("laborSubTotal");
    for(const element of entryTotals)
    {
        console.log("in loop" + entryTotals.length);
        laborTotal += parseFloat(element.value);
    }
    totalInput.value = laborTotal.toFixed(2);
    runningTotal = runningTotal - lastLaborTotal + laborTotal;
    lastLaborTotal = laborTotal;
    console.log(runningTotal);
    alert("Computations in labor invoice complete and verified.")
}

function calculateTotalTiling()
{
    calculateTilingEntryTotals();
    console.log("call to calculate total tiling")
    let tilingTotal = 0.0;
    let tilingInvoice = document.getElementById("tilingTable");
    let entryTotals = tilingInvoice.getElementsByClassName("entryTotal");
    let totalInput = document.getElementById("tilingSubTotal");
    for(const element of entryTotals)
    {
        console.log("in loop" + entryTotals.length);
        tilingTotal += parseFloat(element.value);
    }
    totalInput.value = tilingTotal.toFixed(2);
    runningTotal = runningTotal - lastTilingTotal + tilingTotal;
    lastTilingTotal = tilingTotal;
    console.log(runningTotal);
    alert("Computations in tiling invoice complete and verified.")
}

function calculateTilingEntryTotals()
{
    console.log("call to calculate Tiling entry totals");
    let tilingTable = document.getElementById("tilingTable");
    let unitPrices = tilingTable.getElementsByClassName("unitPriceEntry");
    let quantities = tilingTable.getElementsByClassName("quantityValues");
    let totalEntries = tilingTable.getElementsByClassName("entryTotal");
    console.log(unitPrices.length);

    for(let i = 0; i < unitPrices.length; i++)
    {
        console.log((parseFloat(unitPrices[i].value) * parseFloat(quantities[i].value)));
        totalEntries[i].value = (parseFloat(unitPrices[i].value) * parseFloat(quantities[i].value)).toFixed(2);
        console.log(totalEntries[i].value);
    } 
}

function calculatePoolTotal()
{
    calculatePoolEntryTotals();
    console.log("call to calculate total pool")
    let poolTotal = 0.0;
    let poolInvoice = document.getElementById("poolEquipmentTable");
    let entryTotals = poolInvoice.getElementsByClassName("entryTotal");
    let totalInput = document.getElementById("poolSubTotal");
    for(const element of entryTotals)
    {
        console.log("in loop" + entryTotals.length);
        poolTotal += parseFloat(element.value);
    }
    totalInput.value = poolTotal.toFixed(2);
    runningTotal = runningTotal - lastPoolTotal + poolTotal;
    lastPoolTotal = poolTotal;
    console.log(runningTotal);
    alert("Computations in pool invoice complete and verified.")
}

function calculatePoolEntryTotals()
{
    console.log("call to calculate pool entry totals");
    let poolTable = document.getElementById("poolEquipmentTable");
    let unitPrices = poolTable.getElementsByClassName("unitPriceEntry");
    let quantities = poolTable.getElementsByClassName("quantityValues");
    let totalEntries = poolTable.getElementsByClassName("entryTotal");
    console.log(unitPrices.length);

    for(let i = 0; i < unitPrices.length; i++)
    {
        console.log((parseFloat(unitPrices[i].value) * parseFloat(quantities[i].value)));
        totalEntries[i].value = (parseFloat(unitPrices[i].value) * parseFloat(quantities[i].value)).toFixed(2);
        console.log(totalEntries[i].value);
    } 
}

function calculateTotalMaterial()
{
    calculateMaterialEntryTotals();
    console.log("call to calculate total material")
    let materialTotal = 0.0;
    let materialInvoice = document.getElementById("materialTable");
    let entryTotals = materialInvoice.getElementsByClassName("entryTotal");
    let totalInput = document.getElementById("materialSubTotal");
    for(const element of entryTotals)
    {
        console.log("in loop" + entryTotals.length);
        materialTotal += parseFloat(element.value);
    }
    totalInput.value = materialTotal.toFixed(2);
    runningTotal = runningTotal - lastMaterialTotal + materialTotal;
    lastMaterialTotal = materialTotal;
    console.log(runningTotal);
    alert("Computations in pool invoice complete and verified.")
}

function calculateMaterialEntryTotals()
{
    console.log("call to calculate material entry totals");
    let materialTable = document.getElementById("materialTable");
    let unitPrices = materialTable.getElementsByClassName("unitPriceEntry");
    let quantities = materialTable.getElementsByClassName("quantityValues");
    let totalEntries = materialTable.getElementsByClassName("entryTotal");
    console.log(unitPrices.length);

    for(let i = 0; i < unitPrices.length; i++)
    {
        console.log((parseFloat(unitPrices[i].value) * parseFloat(quantities[i].value)));
        totalEntries[i].value = (parseFloat(unitPrices[i].value) * parseFloat(quantities[i].value)).toFixed(2);
        console.log(totalEntries[i].value);
    } 
}

function verifyBreakDown()
{
    calculatePoolTotal();
    calculateTotalTiling();
    calculateTotalMaterial();
    calculateTotalLabor();
    let mobilizationPercent = document.getElementById("mobilPercent");
    let mobilizationTotal = document.getElementById("mobilTotal");
    if(parseFloat(mobilizationPercent.value) > 100)
    {
        mobilizationPercent.value = 100;
    }
    if(parseFloat(mobilizationPercent.value) < 0)
    {
        mobilizationPercent.value = 0;
    }
    if(((parseFloat(mobilizationPercent.value) > 0 && parseFloat(mobilizationPercent.value) <= 100)) || 
        ((parseFloat(mobilizationTotal.value)) >= 0))
    {
        if(parseFloat(mobilizationPercent) * runningTotal != parseFloat(mobilizationTotal.value))
        {
            mobilizationTotal.value = ((parseFloat(mobilizationPercent.value) * runningTotal).toFixed(2)) / 100;
        }
    }
    else if(parseFloat(mobilizationPercent.value) == 0 && parseFloat(mobilizationTotal.value))
    {
        mobilizationPercent.value = ((parseFloat(mobilizationTotal.value) * 100) / runningTotal).toFixed(2);
    }

    //Balance
    let balancePercent = document.getElementById("balPercent");
    let balanceTotal = document.getElementById("balTotal");
    if(parseFloat(balancePercent.value) > 100)
    {
        balancePercent.value = 100;
    }
    if(parseFloat(balancePercent.value) < 0)
    {
        balancePercent.value = 0;
    }
    if(((parseFloat(balancePercent.value) > 0 && parseFloat(balancePercent.value) <= 100)) || 
        ((parseFloat(balanceTotal.value)) >= 0))
    {
        if(parseFloat(balancePercent) * runningTotal != parseFloat(balanceTotal.value))
        {
            balanceTotal.value = ((parseFloat(balancePercent.value) * runningTotal).toFixed(2)) / 100;
        }
    }
    else if(parseFloat(balancePercent.value) == 0 && parseFloat(balanceTotal.value))
    {
        balancePercent.value = ((parseFloat(balanceTotal.value) * 100) / runningTotal).toFixed(2);
    }

    let inflationPercent = "";
    let inflationValue = ""
}
