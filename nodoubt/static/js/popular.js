const contentPopular = document.querySelector(".content_popular_top");
const contentPopularLast = contentPopular.lastElementChild;
const contentPopularLastAnchor = contentPopularLast.lastElementChild;
contentPopularLastAnchor.addEventListener("click",popularReady);
const targetCompany = contentPopularLast.childNodes[1];
const targetJob = contentPopularLast.childNodes[3];
const targetYear = contentPopularLast.childNodes[5];
targetJob.innerText = "공개일: 10월 1일 금요일";

function getClock() {
    const contentPopular = document.querySelector(".content_popular_top");
    const contentPopularLast = contentPopular.lastElementChild;
    const targetYear = contentPopularLast.childNodes[5];
    const date = new Date();
    const targetDay = new Date(2021, 9, 1, 0, 0, 0);
    const month = String(date.getMonth()).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");
    date.setMonth(month);
    date.setDate(day);
    date.setHours(hour);
    date.setMinutes(minute);
    date.setSeconds(second);
    const timeGap = targetDay - date;
    const dayGap = Math.floor(timeGap / (1000 * 60 * 60 * 24));
    const hourGap = Math.floor(timeGap / (1000 * 60 * 60)) % 24;
    const minuteGap = Math.floor(timeGap / (1000 * 60)) % 60;
    const secondGap = Math.floor(timeGap / 1000) % 60;
    if(timeGap <= 0){
        targetDay.innerText = "D - Day"
    }
    else{
        targetYear.innerText = `D - ${dayGap}일 ${hourGap}시간 ${minuteGap}분 ${secondGap}초`;
    }
}

getClock();
setInterval(getClock, 1000);


function popularReady(event){
    event.preventDefault();
    alert("서비스 준비 중입니다.");
}
