// const requestSubmit = document.querySelector(".content_second_submit");
// const requestForm = document.querySelector("#content_second_left_application_submit_form");
// requestSubmit.addEventListener("click", submitCheck);
// requestForm.addEventListener("submit",submitNotice);
// function submitCheck(event){
//     let confirmBoolean = confirm("제출하시겠습니까?");
//     if(confirmBoolean == false){
//         event.preventDefault();
//     }
// }
// function submitNotice(event){
//     alert("제출이 완료되었습니다.");
// }
const contentPopular = document.querySelector(".content_popular_top");
const contentPopularLast = contentPopular.lastElementChild;
const contentPopularLastAnchor = contentPopularLast.lastElementChild;
contentPopularLastAnchor.addEventListener("click",popularReady);
const targetCompany = contentPopularLast.childNodes[1];
const targetJob = contentPopularLast.childNodes[3];
const targetYear = contentPopularLast.childNodes[5];
targetCompany.innerText = "New 취업 정보";
targetJob.innerText = "공개일: 9월 6일 월요일";
// function getDtime(){
//     if(timeGap <= 0){
//         targetYear.innerText = "D - Day";
//     }
//     else{
//         targetYear.innerText = `D - ${dayGap}일 ${hourGap}시간 ${minuteGap}분 ${secondGap}초`;
//     }
// }
// getDtime();
// setInterval(getDtime, 1000);

function popularReady(event){
    event.preventDefault();
    alert("서비스 준비 중입니다.");
}
