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
dateTexts.innerText = formattedDate.toString();

// Page Title Setting
const enteredTitle = document.getElementById("invoiceTitle").innerText;
const pageTitle = document.getElementsByTagName("title");
pageTitle[0].innerText = enteredTitle;