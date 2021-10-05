const clockTitle = document.querySelector(".content_second_dtime_clock");
function getClock() {
    const promiseDay = new Date();
    const targetDay = new Date(2021, 9, 11, 0, 0, 0);
    const month = String(promiseDay.getMonth()).padStart(2, "0");
    const day = String(promiseDay.getDate()).padStart(2, "0");
    const hour = String(promiseDay.getHours()).padStart(2, "0");
    const minute = String(promiseDay.getMinutes()).padStart(2, "0");
    const second = String(promiseDay.getSeconds()).padStart(2, "0");
    promiseDay.setMonth(month);
    promiseDay.setDate(day);
    promiseDay.setHours(hour);
    promiseDay.setMinutes(minute);
    promiseDay.setSeconds(second);
    const timeGap = targetDay - promiseDay;
    const dayGap = Math.floor(timeGap / (1000 * 60 * 60 * 24));
    const hourGap = Math.floor(timeGap / (1000 * 60 * 60)) % 24;
    const minuteGap = Math.floor(timeGap / (1000 * 60)) % 60;
    const secondGap = Math.floor(timeGap / 1000) % 60;
    if(timeGap <= 0){
        clockTitle.innerText = "[ 신청 마감 ] - 다음 신청 기간: 10/12일 00시 ~ 10월 18일 00시"
    }
    else{
        clockTitle.innerText = `D - ${dayGap}일 ${hourGap}시간 ${minuteGap}분 ${secondGap}초`;
    }
}

getClock();
setInterval(getClock, 1000);
