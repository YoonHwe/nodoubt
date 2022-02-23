/* index.html */
function fnMove(seq){
    var offset = $(".content_" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}

/* index.html */
const category_first = document.querySelector(".category_list_first");
const category_first_h3 = category_first.querySelector("h3");
const category_second = document.querySelector(".category_list_second");
const category_second_h3 = category_second.querySelector("h3");
const category_third = document.querySelector(".category_list_third");
const category_third_h3 = category_third.querySelector("h3");
const category_fourth = document.querySelector(".category_list_fourth");
const category_fourth_h3 = category_fourth.querySelector("h3");
const first = document.querySelector(".list_first");
const second = document.querySelector(".list_second");
const third = document.querySelector(".list_third");
const fourth = document.querySelector(".list_fourth");
const fifth = document.querySelector(".list_fifth");
const sixth = document.querySelector(".list_sixth");
const category_border = document.querySelectorAll(".list_content");
for (let index = 0; index < category_border.length; index++) {
    const element = category_border[index];
    element.classList.add("list_content_border");
}
category_first.style.color = "orange";
category_second.style.color = "black";
category_third.style.color = "black";
category_fourth.style.color = "black";
category_first_h3.style.borderBottom = "2px solid black";
category_first_h3.style.fontWeight = "bold";
first.innerHTML = "<a class='list_content_link' href='https://www.hackers.co.kr/' target='_blank'><h2>해커스</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>토익</span>&nbsp;<span id='list_content_link_tag'>텝스</span>&nbsp;<span id='list_content_link_tag'>토스</span>&nbsp;<span id='list_content_link_tag'>오픽</span>&nbsp;<span id='list_content_link_tag'>기초영어</span>&nbsp;...</h3>";
second.innerHTML = "<a class='list_content_link' href='https://www.ybm.co.kr/' target='_blank'><h2>YBM</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>토익</span>&nbsp;<span id='list_content_link_tag'>토스</span>&nbsp;<span id='list_content_link_tag'>영어</span>&nbsp;<span id='list_content_link_tag'>중국어</span>&nbsp;<span id='list_content_link_tag'>일어</span>&nbsp;...</h3>";
third.innerHTML = "<a class='list_content_link' href='https://eng.conects.com/' target='_blank'><h2>영단기</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>토익</span>&nbsp;<span id='list_content_link_tag'>토스</span>&nbsp;<span id='list_content_link_tag'>오픽</span>&nbsp;<span id='list_content_link_tag'>텝스</span>&nbsp;<span id='list_content_link_tag'>토플</span>&nbsp;...</h3>";
fourth.innerHTML = "<a class='list_content_link' href='https://www.pagodastar.com/' target='_blank'><h2>파고다</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>토익</span>&nbsp;<span id='list_content_link_tag'>토플</span>&nbsp;<span id='list_content_link_tag'>토스</span>&nbsp;<span id='list_content_link_tag'>오픽</span>&nbsp;<span id='list_content_link_tag'>아이엘츠</span>&nbsp;...</h3>";
fifth.innerHTML = "<a class='list_content_link' href='https://lab.siwonschool.com/' target='_blank'><h2>시원스쿨</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>토익</span>&nbsp;<span id='list_content_link_tag'>토스</span>&nbsp;<span id='list_content_link_tag'>오픽</span>&nbsp;<span id='list_content_link_tag'>텝스</span>&nbsp;<span id='list_content_link_tag'>아이엘츠</span>&nbsp;...</h3>";
sixth.innerHTML = "";

function clearCategory(){
    category_first.style.color = "";
    category_second.style.color = "";
    category_third.style.color = "";
    category_fourth.style.color = "";
    category_first_h3.style.borderBottom = "";
    category_second_h3.style.borderBottom = "";
    category_third_h3.style.borderBottom = "";
    category_fourth_h3.style.borderBottom = "";
    category_first_h3.style.fontWeight = "";
    category_second_h3.style.fontWeight = "";
    category_third_h3.style.fontWeight = "";
    category_fourth_h3.style.fontWeight = "";
    first.innerHTML = "";
    second.innerHTML = "";
    third.innerHTML = "";
    fourth.innerHTML = "";
    fifth.innerHTML = "";
    sixth.innerHTML = "";
}

function paintList(event){    
    clearCategory();
    if(event === 1){
        category_first.style.color = "orange";
        category_first_h3.style.borderBottom = "2px solid black";
        category_first_h3.style.fontWeight = "bold";
        first.innerHTML = "<a class='list_content_link' href='https://www.hackers.co.kr/' target='_blank'><h2>해커스</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>토익</span>&nbsp;<span id='list_content_link_tag'>텝스</span>&nbsp;<span id='list_content_link_tag'>토스</span>&nbsp;<span id='list_content_link_tag'>오픽</span>&nbsp;<span id='list_content_link_tag'>기초영어</span>&nbsp;...</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://www.ybm.co.kr/' target='_blank'><h2>YBM</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>토익</span>&nbsp;<span id='list_content_link_tag'>토스</span>&nbsp;<span id='list_content_link_tag'>영어</span>&nbsp;<span id='list_content_link_tag'>중국어</span>&nbsp;<span id='list_content_link_tag'>일어</span>&nbsp;...</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://eng.conects.com/' target='_blank'><h2>영단기</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>토익</span>&nbsp;<span id='list_content_link_tag'>토스</span>&nbsp;<span id='list_content_link_tag'>오픽</span>&nbsp;<span id='list_content_link_tag'>텝스</span>&nbsp;<span id='list_content_link_tag'>토플</span>&nbsp;...</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='https://www.pagodastar.com/' target='_blank'><h2>파고다</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>토익</span>&nbsp;<span id='list_content_link_tag'>토플</span>&nbsp;<span id='list_content_link_tag'>토스</span>&nbsp;<span id='list_content_link_tag'>오픽</span>&nbsp;<span id='list_content_link_tag'>아이엘츠</span>&nbsp;...</h3>";
        fifth.innerHTML = "<a class='list_content_link' href='https://lab.siwonschool.com/' target='_blank'><h2>시원스쿨</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>토익</span>&nbsp;<span id='list_content_link_tag'>토스</span>&nbsp;<span id='list_content_link_tag'>오픽</span>&nbsp;<span id='list_content_link_tag'>텝스</span>&nbsp;<span id='list_content_link_tag'>아이엘츠</span>&nbsp;...</h3>";
    }
    if(event === 2){
        category_second.style.color = "orange";
        category_second_h3.style.borderBottom = "2px solid black";
        category_second_h3.style.fontWeight = "bold";
        first.innerHTML = "<a class='list_content_link' href='https://www.eduwill.net/Basic/global_main.asp' target='_blank'><h2>에듀윌</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>기사/산업기사/기능사</span>&nbsp;<span id='list_content_link_tag'>경영지도사</span>&nbsp;<span id='list_content_link_tag'>공인중개사</span>&nbsp;<span id='list_content_link_tag'>한국사능력검정</span>&nbsp;...</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://pass.hackers.com/' target='_blank'><h2>해커스자격증</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>기사/산업기사</span>&nbsp;<span id='list_content_link_tag'>컴퓨터활용능력</span>&nbsp;<span id='list_content_link_tag'>워드프로세서</span>&nbsp;<span id='list_content_link_tag'>공인중개사</span>&nbsp;...</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://www.youtube.com/channel/UC0MVv0wGYB078pISgHFwhzQ' target='_blank'><h2>최태성 1TV</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>한국사능력검정</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='https://www.itbtm.com/' target='_blank'><h2>IT버팀목</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>컴퓨터활용능력</h3>";
        fifth.innerHTML = "<a class='list_content_link' href='http://qulab.co.kr/que/board.php?board=home' target='_blank'><h2>퀘스천랩</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>사회조사분석사</span></h3>";
    }
    if(event === 3){        
        category_third.style.color = "orange";
        category_third_h3.style.borderBottom = "2px solid black";
        category_third_h3.style.fontWeight = "bold";
        first.innerHTML = "<a class='list_content_link' href='http://www.dataedu.kr/' target='_blank'><h2>데이터에듀</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>데이터분석전문가(ADP)</span>&nbsp;<span id='list_content_link_tag'>데이터분석준전문가(ADsP)</span>&nbsp;...</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://www.epasskorea.com/' target='_blank'><h2>이패스코리아</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>회계관리</span>&nbsp;<span id='list_content_link_tag'>전산세무</span>&nbsp;<span id='list_content_link_tag'>전산회계</span>&nbsp;<span id='list_content_link_tag'>데이터분석준전문가(ADsP)</span>&nbsp;...</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://fn.hackers.com/' target='_blank'><h2>해커스금융</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>전산세무</span>&nbsp;<span id='list_content_link_tag'>전산회계</span>&nbsp;<span id='list_content_link_tag'>KBS한국어능력</span>&nbsp;...</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='https://kor.eduwill.net/8lang/Main.asp' target='_blank'><h2>에듀윌 KBS한국어/실용글쓰기</h2></a><h3 id='list_content_link_exp'>&nbsp;<span id='list_content_link_tag'>KBS한국어능력</h3>";
    }
    if(event === 4){     
        category_fourth.style.color = "orange";
        category_fourth_h3.style.borderBottom = "2px solid black";
        category_fourth_h3.style.fontWeight = "bold";
    }
}

/* index.html */
window.onload = function() {
    function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }
    document.getElementById('modal_btn').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);
};