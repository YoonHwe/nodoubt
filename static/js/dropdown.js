const dropdown = document.querySelector(".dropdown");
const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");
dropdown.addEventListener("click", showDropdown);

function showDropdown(){
    dropbtn.classList.toggle("dropbtn_color_orange");
    dropdownContent.classList.toggle("dropdown_display_block");
}