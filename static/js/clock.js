const clockTitle = document.querySelector(".content_dtime h2");
function getClock() {
    const date = new Date();
    const targetDay = new Date();
    targetDay.setMonth(7);
    targetDay.setDate(25);
    targetDay.setHours(0);
    targetDay.setMinutes(0);
    targetDay.setSeconds(0);
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
        clockTitle.innerText = "D - Day";
    }
    else{
        clockTitle.innerText = `D - ${dayGap}일 ${hourGap}시간 ${minuteGap}분 ${secondGap}초`;
    }
}

getClock();
setInterval(getClock, 1000);
