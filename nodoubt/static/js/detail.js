const body = document.querySelector("#detail_body");
const tail = document.querySelector("#detail_tail");
const loader = document.querySelector(".loader");
tail.style.height= "50vh";
body.style.display = "none";
tail.style.visibility = "hidden";
setTimeout( () => {
    body.innerHTML = body.innerText;
    body.style.display = "block";
    tail.style.visibility = "visible";
    loader.style.display = "none";
}, 1000);