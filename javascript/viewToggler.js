const viewSwitch = document.getElementById("switch");
const gridView = document.getElementById("grid");
const listView = document.getElementById("list");
const gridActive = document.getElementById("gridActive");
const listActive = document.getElementById("listActive");

viewSwitch.addEventListener("change", function() 
{
    console.log("listening");
    if(viewSwitch.checked)
    {
        gridView.style.left = "1000%";
        listView.style.left = "0.75%";
        console.log("list is active");
    }   
    else
    {
        gridView.style.left = "0.75%";
        listView.style.left = "1000%";
        console.log("grid is active");
    } 
})