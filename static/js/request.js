const requestSubmit = document.querySelector(".content_second_submit");
const requestForm = document.querySelector("#content_second_left_application_submit_form");
requestSubmit.addEventListener("click", submitCheck);
requestForm.addEventListener("submit",submitNotice);
function submitCheck(event){
    let confirmBoolean = confirm("제출하시겠습니까?");
    if(confirmBoolean == false){
        event.preventDefault();
    }
}
function submitNotice(event){
    alert("제출이 완료되었습니다.");
}