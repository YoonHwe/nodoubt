const navLogoutAnchor = document.querySelector("#nav_logout_anchor");
navLogoutAnchor.addEventListener("click", submitLogout);
function submitLogout(){
    const submitInput = document.createElement("input");
    submitInput.style.display = "none";
    submitInput.type = "submit";
    const submitForm = document.querySelector("#nav_logout");
    submitForm.appendChild(submitInput);
    submitInput.click();
}