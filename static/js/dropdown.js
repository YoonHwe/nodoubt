/* navbar.html */
const dropdown = document.querySelector(".dropdown");
const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");
dropdown.addEventListener("click", showDropdown);

function showDropdown(){
    if(dropdownContent.style.display === "none"){
        dropbtn.style.color = "orange";
        dropdownContent.style.display = "block";
    }
    else if(dropdownContent.style.display === "block"){
        dropbtn.style.color = "";
        dropdownContent.style.display = "none";
    }
    else{
        dropbtn.style.color = "orange";
        dropdownContent.style.display = "block";
    }
}