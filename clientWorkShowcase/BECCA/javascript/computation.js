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
        if(isNaN(parseFloat(quantities[i].value)))
            quantities[i].value = "0.00";
        if(isNaN(parseFloat(unitPrices[i].value)))
            unitPrices[i].value = "0.00";
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
        if(isNaN(parseFloat(quantities[i].value)))
            quantities[i].value = "0.00";
        if(isNaN(parseFloat(unitPrices[i].value)))
            unitPrices[i].value = "0.00";
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
        if(isNaN(parseFloat(quantities[i].value)))
            quantities[i].value = "0.00";
        if(isNaN(parseFloat(unitPrices[i].value)))
            unitPrices[i].value = "0.00";
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
    // MOBILIZATION
    let mobilizationPercent = document.getElementById("mobilPercent");
    let mobilizationTotal = document.getElementById("mobilTotal");
    if(isNaN(parseFloat(mobilizationPercent.value)))
        mobilizationPercent.value = "0.00";
    if(isNaN(parseFloat(mobilizationTotal.value)))
        mobilizationTotal.value = "0.00";  
    if(parseFloat(mobilizationPercent.value) > 100)
        mobilizationPercent.value = 100;
    if(parseFloat(mobilizationPercent.value) < 0)
        mobilizationPercent.value = 0;    
    
    // BALANCE
    let balancePercent = document.getElementById("balPercent");    
    let balanceTotal = document.getElementById("balTotal");
    if(isNaN(parseFloat(balancePercent.value)))
        balancePercent.value = "0.00";
    if(isNaN(parseFloat(balanceTotal.value)))
        balanceTotal.value = "0.00";
     // validation for percentage    
    if(parseFloat(balancePercent.value) > 100)
        balancePercent.value = 100;
    if(parseFloat(balancePercent.value) < 0)
        balancePercent.value = 0;    
    

    //mobil percent in mobil val not
    //compute mobil val, balance percent, balance value
    if(parseFloat(mobilizationPercent.value) > 0)
    {
        mobilizationTotal.value = ((parseFloat(mobilizationPercent.value) / 100) * runningTotal).toFixed(2);
        balancePercent.value = (100 - parseFloat(mobilizationPercent.value)).toFixed(2);
        balanceTotal.value = (runningTotal - parseFloat(mobilizationTotal.value)).toFixed(2);
    }
    //mobilVal in mobil percent not
    //compute mobil percent, balance percent, balance value
    else if(parseFloat(mobilizationTotal.value) > 0)
    {
        mobilizationPercent.value = ((parseFloat(mobilizationTotal.value) / runningTotal) * 100).toFixed(2);
        balancePercent.value = (100 - parseFloat(mobilizationPercent.value)).toFixed(2);
        balanceTotal.value = (runningTotal - parseFloat(mobilizationTotal.value)).toFixed(2);
    }
    //bal % entered, bal val not
    //compute bal val, mobil %, mobil val
    else if(parseFloat(balancePercent.value) > 0)
    {
        balanceTotal.value = ((parseFloat(balancePercent.value) / 100) * runningTotal).toFixed(2);
        mobilizationPercent.value = (100 - parseFloat(balancePercent.value)).toFixed(2);
        mobilizationTotal.value = (runningTotal - parseFloat(balanceTotal.value)).toFixed(2);
    }
    //bal val entered
    //compute bal %, mobil %, mobil val
    else if(parseFloat(balanceTotal.value) > 0)
    {
        balancePercent.value = ((parseFloat(balanceTotal.value) / runningTotal) * 100).toFixed(2);
        mobilizationPercent.value = (100 - parseFloat(balancePercent.value));
        mobilizationTotal.value = (runningTotal - parseFloat(balanceTotal.value)).toFixed(2);
    }
    else if(parseFloat(mobilizationTotal.value) <= 0 && parseFloat(mobilizationPercent.value) <= 0)
    {
        balancePercent.value = "100.00";
        balanceTotal.value = runningTotal.toFixed(2);
    } 
    else if(parseFloat(balanceTotal.value) <= 0 && parseFloat(balancePercent.value) <= 0)
    {
        mobilizationPercent.value = "100.00";
        mobilizationTotal.value = runningTotal.toFixed(2);
    } 
    // Inflation computation COMPLETE
    let inflationPercent = document.getElementById("inflationPercentIn");
    let inflationValue = document.getElementById("inflationValueIn");
    console.log(inflationPercent.value)
    if(isNaN(parseFloat(inflationPercent.value)) || parseFloat(inflationPercent.value) < 0)
        inflationPercent.value = 0.00;
    if(isNaN(parseFloat(inflationValue.value)) || parseFloat(inflationValue.value) < 0)
        inflationValue.value = 0.00;
    // both are entered already (positives)
    if(parseFloat(inflationPercent.value) > 0 && parseFloat(inflationValue.value) > 0)
    {
        //check if they correspond
        console.log("working on inflation");
        let tempInflationFromPercent = (parseFloat(inflationPercent.value) / 100) * parseFloat(inflationValue.value);
        console.log(tempInflationFromPercent - parseFloat(inflationValue.value));
        if(tempInflationFromPercent - parseFloat(inflationValue.value) <= 0.01 && tempInflationFromPercent - parseFloat(inflationValue.value) > 0 || (parseFloat(inflationValue.value) - tempInflationFromPercent <= 0.01 && parseFloat(inflationValue.value) - tempInflationFromPercent > 0))
        {
            //they correspond
            console.log("inflation percent and value correspond");
        }
        //percentage takes priority
        else
        {
            console.log("inflation percent and value do not correspond");
            inflationValue.value = ((parseFloat(inflationValue.value) / 100) * runningTotal).toFixed(2);
        }
    }
    //percentage is entered, value is not
    else if(parseFloat(inflationValue.value) <= 0 && parseFloat(inflationPercent.value) > 0)
    {
        console.log("percentage is entered, value is not")
        inflationValue.value = ((parseFloat(inflationPercent.value) / 100) * runningTotal).toFixed(2);
    }
    //value is entered, percentage is not
    else if(parseFloat(inflationValue.value) > 0 && parseFloat(inflationPercent.value) <= 0)
    {
        console.log("value is entered, percentage is not");
        inflationPercent.value = ((parseFloat(inflationValue.value) / runningTotal) * 100).toFixed(2);
    }
    // console.log(parseFloat(inflationPercent.value));

    //verify initial summary section
    let initialSumIn = document.getElementById("initialValue")
    initialSumIn.value = runningTotal.toFixed(2);
    let discountPercentIn = document.getElementById("discountPercent");
    if(isNaN(parseFloat(discountPercentIn.value)))
        discountPercentIn.value = "0.00";
    let discountValueIn = document.getElementById("discountValue");
    if(isNaN(parseFloat(discountValueIn.value)))
        discountValueIn.value = "0.00";
    let amountDueIn = document.getElementById("amountValue");
    // discount value entered, percent not
    if(parseFloat(discountPercentIn.value) > 0)
    {
        discountValueIn.value = ((parseFloat(discountPercentIn.value) / 100) * runningTotal).toFixed(2);
        amountDueIn.value = (runningTotal - parseFloat(discountValueIn.value)).toFixed(2);
    }
    // discount percent entered, value not
    else if(parseFloat(discountValueIn.value) > 0)
    {
        discountPercentIn.value = ((parseFloat(discountValueIn.value) / runningTotal) * 100).toFixed(2);
        amountDueIn.value = (runningTotal - parseFloat(discountValueIn.value)).toFixed(2);
    }
    else if(parseFloat(discountValueIn.value) <= 0 && parseFloat(discountPercentIn.value) <= 0)
    {
        amountDueIn.value = runningTotal.toFixed(2);
    } 

    //verify costing spread
    let materialBreakPercent = document.getElementById("materialBreakPercent");
    if(isNaN(parseFloat(materialBreakPercent.value)))
        materialBreakPercent.value = "0.00";
    materialBreakPercent.value = ((parseFloat(document.getElementById("materialSubTotal").value) / runningTotal) * 100).toFixed(2);
    
    let materialBreakValue = document.getElementById("materialBreakValue");
    if(isNaN(parseFloat(materialBreakValue.value)))
        materialBreakValue.value = "0.00";
    materialBreakValue.value = (parseFloat(document.getElementById("materialSubTotal").value)).toFixed(2);

    let laborBreakPercent = document.getElementById("laborBreakPercent");
    if(isNaN(parseFloat(laborBreakPercent.value)))
        laborBreakPercent.value = "0.00";
    laborBreakPercent.value = ((parseFloat(document.getElementById("laborSubTotal").value) / runningTotal) * 100).toFixed(2);
    
    let laborBreakValue = document.getElementById("laborBreakValue");
    if(isNaN(parseFloat(laborBreakValue.value)))
        laborBreakValue.value = "0.00";
    laborBreakValue.value = (parseFloat(document.getElementById("laborSubTotal").value)).toFixed(2);

    let equipmentBreakPercent = document.getElementById("equipmentBreakPercent");
    if(isNaN(parseFloat(equipmentBreakPercent.value)))
        equipmentBreakPercent.value = "0.00";
    equipmentBreakPercent.value = ((parseFloat(document.getElementById("poolSubTotal").value) / runningTotal) * 100).toFixed(2);

    let equipmentBreakValue = document.getElementById("equipmentBreakValue");
    if(isNaN(parseFloat(equipmentBreakValue.value)))
        equipmentBreakValue.value = "0.00";
    equipmentBreakValue.value = (parseFloat(document.getElementById("poolSubTotal").value)).toFixed(2);

    let tilingBreakPercent = document.getElementById("tilingBreakPercent");
    if(isNaN(parseFloat(tilingBreakPercent.value)))
        tilingBreakPercent.value = "0.00";
    equipmentBreakPercent.value = ((parseFloat(document.getElementById("poolSubTotal").value) / runningTotal) * 100).toFixed(2);

    let tilingBreakValue = document.getElementById("tilingBreakValue");
    if(isNaN(parseFloat(tilingBreakValue.value)))
        tilingBreakValue.value = "0.00";
    tilingBreakValue.value = (parseFloat(document.getElementById("tilingSubTotal").value)).toFixed(2);
    alert("all entries validated.\nplease take a second to proof");
}
