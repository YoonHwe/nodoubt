function fnMove(seq){
    var offset = $(".content_" + seq).offset();
    $('html, body').animate({scrollTop : offset.top}, 400);
}

function paintList(event){
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
    if(event === 1){
        category_first.style.color = "orange";
        category_second.style.color = "black";
        category_third.style.color = "black";
        category_fourth.style.color = "black";
        first.innerHTML = "<a class='list_content_link' href='https://ddp.dongguk.edu/site/main/index001' target='_blank'><h2>동국대학교 취업센터</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>채용 정보, 교내 취업프로그램, 공모전 정보 등을 제공</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://ddp.dongguk.edu/site/homepage/menu/viewMenu?menuid=001005002003' target='_blank'><h2>동국대학교 취업지원 프로그램 로드맵</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>단계별 취업프로그램을 한눈에 알아볼 수 있도록 제공</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://ddp.dongguk.edu/site/program/recruit/listCampusRecruit?menuid=001005002002&recruittype=CR' target='_blank'><h2>동국대학교 취업센터 -> 캠퍼스 리크루팅</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>다양한 기업들의 온라인 채용 설명회를 신청하고 참여할 수 있는 취업센터 내 공간</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='https://www.dongguk.edu/mbs/kr/subview.jsp?id=kr_040000000000' target='_blank'><h2>동국대학교 메인홈페이지 </h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>취업/창업/역량/봉사/IPP 사업단 등 취업 관련 공지 사항 및 학사 정보를 제공</h3>";
        fifth.innerHTML = "<a class='list_content_link' href='https://ddp.dongguk.edu/site/main/index001?prevurl=https%3A%2F%2Fddp.dongguk.edu%2Flogin.jsp' target='_blank'><h2>동국대학교 드림패스</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>학교 수업 외 다양한 정보를 얻을 수 있으며, 나의 활동을 정리 및 기록 가능</h3>";
        sixth.innerHTML = "";
    }
    if(event === 2){
        category_first.style.color = "black";
        category_second.style.color = "orange";
        category_third.style.color = "black";
        category_fourth.style.color = "black";
        first.innerHTML = "<a class='list_content_link' href='https://www.inflearn.com/' target='_blank'><h2>인프런</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>다양한 직무의 입문자들을 위한 강의가 많으며, 한정적인 무료 강의를 제공</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://fastcampus.co.kr/' target='_blank'><h2>패스트캠퍼스</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>현직자들의 노하우를 배울 수 있는 강의가 많으며, 전문성이 떨어지거나 가격이 비싼 경우가 있음</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://tacademy.skplanet.com/live/player/listCategory.action' target='_blank'><h2>T 아카데미</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>SK Planet에서 운영하는 ICT 전문 인재 양성을 위한 온라인 강의 플랫폼</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='https://www.boostcourse.org/' target='_blank'><h2>부스트코스</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>Naver Connect가 운영하는 프로젝트 기반의 IT 관련 무료 온라인 강의 플랫폼</h3>";
        fifth.innerHTML = "<a class='list_content_link' href='http://www.itbtm.com/main2/intro.php' target='_blank'><h2>유동근의 IT버팀목</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>컴퓨터 활용 능력 시험 온라인 강의 사이트</h3>";
        sixth.innerHTML = "";
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
        fifth.innerHTML = "<a class='list_content_link' href='https://publy.co/' target='_blank'><h2>퍼블리</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>취업, 이직은 물론 여러 직무에 관한 정보를 제공하는 뉴스레터 플랫폼</h3>";
        sixth.innerHTML = "<a class='list_content_link' href='https://unread.im/' target='_blank'><h2>언리드</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>경제, 스타트업, 직무 등 여러가지 카테고리의 뉴스레터를 한번에 볼 수 있는 플랫폼</h3>";
    }
    if(event === 4){     
        category_first.style.color = "black";
        category_second.style.color = "black";
        category_third.style.color = "black";
        category_fourth.style.color = "orange";   
        first.innerHTML = "<a class='list_content_link' href='https://brunch.co.kr/@kindoublej#articles' target='_blank'><h2>하리하리</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>자소서 예시 및 정보를 공유하는 블로그</h3>";
        second.innerHTML = "<a class='list_content_link' href='https://brunch.co.kr/@insateam#articles' target='_blank'><h2>성공 취업 진로 종결자 윤호상</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>인사팀 출신 면접관이 운영하는 블로그</h3>";
        third.innerHTML = "<a class='list_content_link' href='https://blog.naver.com/darddong' target='_blank'><h2>옴스잡스</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>자소서 및 면접에 관한 팁을 공유하는 블로그</h3>";
        fourth.innerHTML = "<a class='list_content_link' href='https://cafe.daum.net/breakjob' target='_blank'><h2>취업뽀개기</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>각종 취업관련 자료 및 정보를 공유하는 커뮤니티</h3>";
        fifth.innerHTML = "<a class='list_content_link' href='https://cafe.naver.com/dokchi/' target='_blank'><h2>독하게 취업하는 사람들</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>각종 취업관련 자료 및 정보를 공유하는 커뮤니티 </h3>";
        sixth.innerHTML = "<a class='list_content_link' href='https://cafe.naver.com/specup' target='_blank'><h2>스펙업</h2></a><h3 style='opacity: 0.5; margin-left: 10px;'>취업정보 및 스펙을 위한 정보를 공유하는 커뮤니티</h3>";
    }
}
