const contentPopular = document.querySelector(".content_popular_top");
const contentPopularLast = contentPopular.lastElementChild;
const contentPopularLastAnchor = contentPopularLast.lastElementChild;
contentPopularLastAnchor.addEventListener("click",popularReady);
const targetCompany = contentPopularLast.childNodes[1];
const targetJob = contentPopularLast.childNodes[3];
const targetYear = contentPopularLast.childNodes[5];
targetCompany.innerText = "New 취업 정보";
targetJob.innerText = "공개일: 9월 9일 목요일";
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
