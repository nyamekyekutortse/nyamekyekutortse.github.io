const textarea = document.getElementById("projectTitle");
const additionalInfo = document.getElementById("additions");
additionalInfo.style.top = "0.65in"
textarea.addEventListener("input", () => 
{
  const maxLength = parseInt(textarea.getAttribute("maxlength"));
  const currentLength = textarea.value.length;

  if (currentLength > maxLength) {
    textarea.value = textarea.value.slice(0, maxLength);
  }
});


textarea.addEventListener("input", function() {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + 3 + "px";
  console.log(textarea.scrollHeight + "px")
  additionalInfo.style.top = "calc(0.75in)";
  console.log(additionalInfo.style.top);
});