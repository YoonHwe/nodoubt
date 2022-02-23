/* feedback.html */

const feedbackSubmit = document.querySelector("#feedback_submit button")
const feedbackForm = document.querySelector(".footer_feedback form");

feedbackSubmit.addEventListener("click", submitCheck);
feedbackForm.addEventListener("submit",submitNotice);

function submitCheck(event){
    let confirmBoolean = confirm("제출하시겠습니까?");
    if(confirmBoolean == false){
        event.preventDefault();
    }
}
function submitNotice(){
    alert("제출이 완료되었습니다.");
}