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
        first.innerHTML = "<a class='list_content_link' href=''><h2>학교 1</h2></a>";
        second.innerHTML = "<a class='list_content_link' href=''><h2>학교 2</h2></a>";
        third.innerHTML = "<a class='list_content_link' href=''><h2>학교 3</h2></a>";
        fourth.innerHTML = "<a class='list_content_link' href=''><h2>학교 4</h2></a>";
        fifth.innerHTML = "<a class='list_content_link' href=''><h2>학교 5</h2></a>";
        sixth.innerHTML = "<a class='list_content_link' href=''><h2>학교 6</h2></a>";
    }
    if(event === 2){
        category_first.style.color = "black";
        category_second.style.color = "orange";
        category_third.style.color = "black";
        category_fourth.style.color = "black";
        first.innerHTML = "<a class='list_content_link' href=''><h2>인강 1</h2></a>";
        second.innerHTML = "<a class='list_content_link' href=''><h2>인강 2</h2></a>";
        third.innerHTML = "<a class='list_content_link' href=''><h2>인강 3</h2></a>";
        fourth.innerHTML = "<a class='list_content_link' href=''><h2>인강 4</h2></a>";
        fifth.innerHTML = "<a class='list_content_link' href=''><h2>인강 5</h2></a>";
        sixth.innerHTML = "<a class='list_content_link' href=''><h2>인강 6</h2></a>";
    }
    if(event === 3){        
        category_first.style.color = "black";
        category_second.style.color = "black";
        category_third.style.color = "orange";
        category_fourth.style.color = "black";
        first.innerHTML = "<a class='list_content_link' href=''><h2>뉴스레터 1</h2></a>";
        second.innerHTML = "<a class='list_content_link' href=''><h2>뉴스레터 2</h2></a>";
        third.innerHTML = "<a class='list_content_link' href=''><h2>뉴스레터 3</h2></a>";
        fourth.innerHTML = "<a class='list_content_link' href=''><h2>뉴스레터 4</h2></a>";
        fifth.innerHTML = "<a class='list_content_link' href=''><h2>뉴스레터 5</h2></a>";
        sixth.innerHTML = "<a class='list_content_link' href=''><h2>뉴스레터 6</h2></a>";
    }
    if(event === 4){     
        category_first.style.color = "black";
        category_second.style.color = "black";
        category_third.style.color = "black";
        category_fourth.style.color = "orange";   
        first.innerHTML = "<a class='list_content_link' href=''><h2>블로그 1</h2></a>";
        second.innerHTML = "<a class='list_content_link' href=''><h2>블로그 2</h2></a>";
        third.innerHTML = "<a class='list_content_link' href=''><h2>블로그 3</h2></a>";
        fourth.innerHTML = "<a class='list_content_link' href=''><h2>블로그 4</h2></a>";
        fifth.innerHTML = "<a class='list_content_link' href=''><h2>블로그 5</h2></a>";
        sixth.innerHTML = "<a class='list_content_link' href=''><h2>블로그 6</h2></a>";
    }
}