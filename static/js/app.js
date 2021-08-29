function fnMove(seq){
    var offset = $(".content_" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}
const category_first = document.querySelector(".category_list_first");
const category_second = document.querySelector(".category_list_second");
const category_third = document.querySelector(".category_list_third");
const category_fourth = document.querySelector(".category_list_fourth");
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
first.innerHTML = "<a class='list_content_link' href='https://ddp.dongguk.edu/site/main/index001' target='_blank'><h2>동국대학교 취업센터</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>채용 정보, 교내 취업프로그램, 공모전 정보 등을 제공</h3>";
second.innerHTML = "<a class='list_content_link' href='https://ddp.dongguk.edu/site/homepage/menu/viewMenu?menuid=001005002003' target='_blank'><h2>동국대학교 취업지원 프로그램 로드맵</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>단계별 취업프로그램을 한눈에 알아볼 수 있도록 제공</h3>";
third.innerHTML = "<a class='list_content_link' href='https://ddp.dongguk.edu/site/program/recruit/listCampusRecruit?menuid=001005002002&recruittype=CR' target='_blank'><h2>동국대학교 캠퍼스 리크루팅</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>다양한 기업의 온라인 채용 설명회를 신청 및 참여할 수 있는 취업센터 내 공간</h3>";
fourth.innerHTML = "<a class='list_content_link' href='https://www.dongguk.edu/mbs/kr/subview.jsp?id=kr_040000000000' target='_blank'><h2>동국대학교 메인홈페이지 </h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>취업/창업/역량/봉사/IPP 사업단 등 취업 관련 공지 사항 및 학사 정보를 제공</h3>";
fifth.innerHTML = "";
sixth.innerHTML = "";

function paintList(event){    
    if(event === 1){
        category_first.style.color = "orange";
        category_second.style.color = "black";
        category_third.style.color = "black";
        category_fourth.style.color = "black";
        first.innerHTML = "<a class='list_content_link' href='https://ddp.dongguk.edu/site/main/index001' target='_blank'><h2>동국대학교 취업센터</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>채용 정보, 교내 취업프로그램, 공모전 정보 등을 제공</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://ddp.dongguk.edu/site/homepage/menu/viewMenu?menuid=001005002003' target='_blank'><h2>동국대학교 취업지원 프로그램 로드맵</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>단계별 취업프로그램을 한눈에 알아볼 수 있도록 제공</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://ddp.dongguk.edu/site/program/recruit/listCampusRecruit?menuid=001005002002&recruittype=CR' target='_blank'><h2>동국대학교 캠퍼스 리크루팅</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>다양한 기업의 온라인 채용 설명회를 신청 및 참여할 수 있는 취업센터 내 공간</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='https://www.dongguk.edu/mbs/kr/subview.jsp?id=kr_040000000000' target='_blank'><h2>동국대학교 메인홈페이지 </h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>취업/창업/역량/봉사/IPP 사업단 등 취업 관련 공지 사항 및 학사 정보를 제공</h3>";
        fifth.innerHTML = "";
        sixth.innerHTML = "";
    }
    if(event === 2){
        category_first.style.color = "black";
        category_second.style.color = "orange";
        category_third.style.color = "black";
        category_fourth.style.color = "black";
        first.innerHTML = "<a class='list_content_link' href='https://www.youtube.com/channel/UC0MVv0wGYB078pISgHFwhzQ' target='_blank'><h2>최태성 1TV</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>한국사 강의 1위 최태성의 유튜브 무료 강의</h3>";
        second.innerHTML = "<a class='list_content_link' href=' http://www.qulab.co.kr/que/board.php?board=home' target='_blank'><h2>퀘스천랩</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>사경환 강사의 사회조사분석사 강의</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://www.wowpass.com/' target='_blank'><h2>와우패스</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>사회조사분석사, CFA 등 경영학 관련 자격증의 유료 강의를 제공</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='https://www.dataedu.kr/' target='_blank'><h2>데이터에듀</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>ADP, ADSP 시험에 대한 자체 제작 교재 및 인강을 유료로 제공</h3>";
        fifth.innerHTML = "<a class='list_content_link' href='http://www.itbtm.com/main2/intro.php' target='_blank'><h2>유동근의 IT버팀목</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>컴퓨터 활용 능력 시험 온라인 강의 사이트</h3>";
        sixth.innerHTML = "<a class='list_content_link' href='http://www.itbtm.com/main2/intro.php' target='_blank'><h2>인프런</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>실무에 필요한 온라인 강의를 제공</h3>";
    }
    if(event === 3){        
        category_first.style.color = "black";
        category_second.style.color = "black";
        category_third.style.color = "orange";
        category_fourth.style.color = "black";
        first.innerHTML = "<a class='list_content_link' href='https://page.stibee.com/archives/91763' target='_blank'><h2>한경 잡(Job)아라</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>취업관련 정보를 제공하는 한국경제 뉴스레터</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://www.notion.so/PPO-SIC-3d6f4b7e0847481c87277376b944208d' target='_blank'><h2>뽀시래기 뉴스레터</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>실무에서 자주 사용되는 용어를 간단하게 설명해주는 뉴스레터</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://hyuni.substack.com/' target='_blank'><h2>HWBI</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>여러가지 비즈니스 인사이트를 제공하는 뉴스레터</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='https://us4.campaign-archive.com/home/?u=fac734f2470934a937f9d902c&id=0fd8d1e102' target='_blank'><h2>일분톡</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>여러가지 IT 및 4차 산업에 관한 정보를 제공하는 뉴스레터</h3>";
        fifth.innerHTML = "<a class='list_content_link' href='https://www.newneek.co/' target='_blank'><h2>뉴닉</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>밀레니얼 세대 맞춤형 뉴스</h3>";
        sixth.innerHTML = "<a class='list_content_link' href='https://unread.im/' target='_blank'><h2>언리드</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>경제, 스타트업, 직무 등 여러가지 카테고리의 뉴스레터를 한번에 볼 수 있는 플랫폼</h3>";
    }
    if(event === 4){     
        category_first.style.color = "black";
        category_second.style.color = "black";
        category_third.style.color = "black";
        category_fourth.style.color = "orange";   
        first.innerHTML = "<a class='list_content_link' href='https://brunch.co.kr/@kindoublej#articles' target='_blank'><h2>하리하리</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>자소서 예시 및 정보를 공유하는 블로그</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://publy.co/' target='_blank'><h2>퍼블리</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>취업, 이직은 물론 여러 직무에 관한 정보를 제공하는 뉴스레터 플랫폼</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://blog.naver.com/darddong' target='_blank'><h2>옴스잡스</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>자소서 및 면접에 관한 팁을 공유하는 블로그</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='https://cafe.daum.net/breakjob' target='_blank'><h2>취업뽀개기</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>각종 취업관련 자료 및 정보를 공유하는 커뮤니티</h3>";
        fifth.innerHTML = "<a class='list_content_link' href='https://cafe.naver.com/dokchi/' target='_blank'><h2>독하게 취업하는 사람들</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>각종 취업관련 자료 및 정보를 공유하는 커뮤니티 </h3>";
        sixth.innerHTML = "<a class='list_content_link' href='https://cafe.naver.com/specup' target='_blank'><h2>스펙업</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>취업정보 및 스펙을 위한 정보를 공유하는 커뮤니티</h3>";
    }
}

window.onload = function() {
    
    function onClick() {
        document.querySelector('.modal_wrap').style.display ='block';
        document.querySelector('.black_bg').style.display ='block';
        console.log("clicked");
    }   
    function offClick() {
        document.querySelector('.modal_wrap').style.display ='none';
        document.querySelector('.black_bg').style.display ='none';
    }

    document.getElementById('modal_btn').addEventListener('click', onClick);
    document.querySelector('.modal_close').addEventListener('click', offClick);

};