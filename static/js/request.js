const requestSubmit = document.querySelector(".content_second_submit");
requestSubmit.addEventListener("click", submitCheck);

function submitCheck(event){
    let confirmBoolean = confirm("제출하시겠습니까?");
    if(confirmBoolean == false){
        event.preventDefault();
    }
    else{
        confirm("제출되었습니다.");
    }
}
