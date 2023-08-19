const dateTexts = document.getElementById("date");
const date = new Date();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayOfWeek = daysOfWeek[date.getDay()];
const dayOfMonth = date.getDate();
const month = monthsOfYear[date.getMonth()];
const year = date.getFullYear();

let suffix;
if (dayOfMonth === 1 || dayOfMonth === 21 || dayOfMonth === 31) {
  suffix = "st";
} else if (dayOfMonth === 2 || dayOfMonth === 22) {
  suffix = "nd";
} else if (dayOfMonth === 3 || dayOfMonth === 23) {
  suffix = "rd";
} else {
  suffix = "th";
}

const formattedDate = `${dayOfWeek}, ${dayOfMonth} ${month}, ${year}`;
// dateTexts.innerText = formattedDate.toString();

// Page Title Setting
const titleInput = document.getElementById("projectTitle");
console.log("skr" + titleInput.value);
titleInput.addEventListener('change', () => 
{
  let enteredTitle = titleInput.value;
  console.log(enteredTitle);
  let pageTitle = document.getElementsByTagName("title");
  pageTitle[0].innerText = enteredTitle.toUpperCase();
});


//invoice dating
const invoiceDate = document.getElementById("invoiceDate")
invoiceDate.innerHTML = getFormattedDate();
function getFormattedDate() {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, '0');
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = currentDate.getFullYear();
  return `${day}-${month}-${year}`;
}

//invoice number generation
const invoiceNumber = document.getElementById("invoiceNumber");
invoiceNumber.innerHTML = generateInvoiceNumber();
function generateInvoiceNumber() {
  const timestamp = Date.now().toString(); // Get current timestamp
  const randomString = Math.random().toString(36).substring(2, 9); // Generate random alphanumeric string

  const invoiceNumber = timestamp + randomString;
  // may change this to contractor name?
  return "BIN" + invoiceNumber.substring(0, 7); // Limit to 7 characters
}

//setting currency throughout document
const currencyIn = document.getElementById("transactionCurrency");

currencyIn.addEventListener("change", () =>
{
    var setCurrency = "GH&#8373";
    if(currencyIn.value.trim() !== "")
    {
        if(currencyIn.value.contains("canada"))
          setCurrency = "CAD";
        else if(currencyIn.value.contains("BRITISH"))
        {
            setCurrency = "GBP";
        }
    }
})

// Units of measure
// let unitsOfMeasure = ["coil", "coils", "day", "days", "trip", "trips", "pc", "pcs", "bag", "bags", "unit", "units", "ton", "tons", "sq. meter", "sq. meters", "set", "sets"]
// unitsOfMeasure = unitsOfMeasure.sort((a, b) => (a < b));
// console.log(unitsOfMeasure.toString());
// const units = document.getElementById("unitsOfMeasure");

// unitsOfMeasure.forEach(unit =>
//     {
//         const option = document.createElement("option");
//         option.value = unit;
//         option.innerText = unit;
//         units.appendChild(option);
//     })
// console.log("complete");

// let items = [  "COIL", "COILS", "DAY", "DAYS", "TRIP", "TRIPS", "PC", "PCS", "BAG", "BAGS", "UNIT", "UNITS", "TON", "TONS", "SQ. METER", "SQ. METERS", "SET", "SETS"]
//   const dataList = document.getElementById('myList');
  
//   items.forEach(item => {
//     const option = document.createElement('option');
//     option.value = item;
//     dataList.appendChild(option);
//   });