/* detail.html */

const head = document.querySelector("#detail_head");
const body = document.querySelector("#detail_body");
const tail = document.querySelector("#detail_tail");
const loader = document.querySelector(".loader");

body.style.display = "none";
tail.style.visibility = "hidden";

setTimeout( () => {
    head.style.display = "none";
    body.innerHTML = body.innerText;
    body.style.display = "block";
    tail.style.visibility = "visible";
    loader.style.display = "none";
}, 1000);