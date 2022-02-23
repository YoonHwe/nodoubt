/* index.html */

const youtubeOne = 'https://www.youtube.com/embed/Hg1gC8bq-6o';
const youtubeTwo = 'https://www.youtube.com/embed/k9S7Tx-GSmQ';
const youtubeThree = 'https://www.youtube.com/embed/I5BfKqOkp1Y';
const youtubeFour = 'https://www.youtube.com/embed/JXFsfqeTLIA';
const youtubeFive = 'https://www.youtube.com/embed/Cw9OIlrNIww';
const youtubeSix = 'https://www.youtube.com/embed/f_SW6i5G7Gk';
const youtubeSeven = 'https://www.youtube.com/embed/mvM69ilcxas';
const youtubeEight = 'https://www.youtube.com/embed/0TF2ZFpSpxo';
const youtubeNine = 'https://www.youtube.com/embed/cj7_pgUrtWE';

const contentIssueFirst = document.querySelector("#content_issue_first");
const contentIssueSecond = document.querySelector("#content_issue_second");
const contentIssueThird = document.querySelector("#content_issue_third");
const controls = document.querySelector(".controls");
const prevButton = document.querySelector(".prev");
const presentButton = document.querySelector(".present");
const nextButton = document.querySelector(".next");
const contentIssueFirstClass = document.querySelector(".content_issue_first");
const contentIssueFirstClassIframes = contentIssueFirstClass.querySelectorAll("iframe");
function clearFirstSrc(){
    for(i = 0; i < contentIssueFirstClassIframes.length; i++){
        contentIssueFirstClassIframes[i].src = "";
    }
}

let totalPages = 3;
let currentPage = 1;

const contentIssueFirstTablet = document.querySelector("#content_issue_tablet_first");
const contentIssueSecondTablet = document.querySelector("#content_issue_tablet_second");
const contentIssueThirdTablet = document.querySelector("#content_issue_tablet_third");
const contentIssueFourthTablet = document.querySelector("#content_issue_tablet_fourth");
const contentIssueFifthTablet = document.querySelector("#content_issue_tablet_fifth");
const controlsTablet = document.querySelector("#tablet_controls");
const prevButtonTablet = document.querySelector("#tablet_prev");
const presentButtonTablet = document.querySelector("#tablet_present");
const nextButtonTablet = document.querySelector("#tablet_next");
const contentIssueTabletClass = document.querySelector(".content_issue_tablet");
const contentIssueTabletClassIframes = contentIssueTabletClass.querySelectorAll("iframe");
function clearTabletSrc(){
    for(i = 0; i < contentIssueTabletClassIframes.length; i++){
        contentIssueTabletClassIframes[i].src = "";
    }
}

let totalPagesTablet = 5;
let currentPageTablet = 1;

const contentIssueFirstMobile = document.querySelector("#content_issue_mobile_first");
const contentIssueSecondMobile = document.querySelector("#content_issue_mobile_second");
const contentIssueThirdMobile = document.querySelector("#content_issue_mobile_third");
const contentIssueFourthMobile = document.querySelector("#content_issue_mobile_fourth");
const contentIssueFifthMobile = document.querySelector("#content_issue_mobile_fifth");
const contentIssueSixthMobile = document.querySelector("#content_issue_mobile_sixth");
const contentIssueSeventhMobile = document.querySelector("#content_issue_mobile_seventh");
const contentIssueEighthMobile = document.querySelector("#content_issue_mobile_eighth");
const contentIssueNinthMobile = document.querySelector("#content_issue_mobile_ninth");
const controlsMobile = document.querySelector("#mobile_controls");
const prevButtonMobile = document.querySelector("#mobile_prev");
const presentButtonMobile = document.querySelector("#mobile_present");
const nextButtonMobile = document.querySelector("#mobile_next");
const contentIssueMobileClass = document.querySelector(".content_issue_mobile");
const contentIssueMobileClassIframes = contentIssueMobileClass.querySelectorAll("iframe");
function clearMobileSrc(){
    for(i = 0; i < contentIssueMobileClassIframes.length; i++){
        contentIssueMobileClassIframes[i].src = "";
    }
}

let totalPagesMobile = 9;
let currentPageMobile = 1;

prevButton.style.visibility = "hidden";
presentButton.innerText = ` ${currentPage} / ${totalPages} `
prevButtonTablet.style.visibility = "hidden";
presentButtonTablet.innerText = ` ${currentPageTablet} / ${totalPagesTablet} `
prevButtonMobile.style.visibility = "hidden";
presentButtonMobile.innerText = ` ${currentPageMobile} / ${totalPagesMobile} `

prevButton.addEventListener("click", goPrev);
nextButton.addEventListener("click", goNext);
prevButtonTablet.addEventListener("click", goPrevTablet);
nextButtonTablet.addEventListener("click", goNextTablet);
prevButtonMobile.addEventListener("click", goPrevMobile);
nextButtonMobile.addEventListener("click", goNextMobile);

function clearCheckPage(){
    prevButton.style.visibility = "visible";
    nextButton.style.visibility = "visible";
    contentIssueFirst.style.display = "none";
    contentIssueSecond.style.display = "none";
    contentIssueThird.style.display = "none";
}
function clearCheckPageTablet(){
    prevButtonTablet.style.visibility = "visible";
    nextButtonTablet.style.visibility = "visible";
    contentIssueFirstTablet.style.display = "none";
    contentIssueSecondTablet.style.display = "none";
    contentIssueThirdTablet.style.display = "none";
    contentIssueFourthTablet.style.display = "none";
    contentIssueFifthTablet.style.display = "none";
}
function clearCheckPageMobile(){
    prevButtonMobile.style.visibility = "visible";
    nextButtonMobile.style.visibility = "visible";
    contentIssueFirstMobile.style.display = "none";
    contentIssueSecondMobile.style.display = "none";
    contentIssueThirdMobile.style.display = "none";
    contentIssueFourthMobile.style.display = "none";
    contentIssueFifthMobile.style.display = "none";
    contentIssueSixthMobile.style.display = "none";
    contentIssueSeventhMobile.style.display = "none";
    contentIssueEighthMobile.style.display = "none";
    contentIssueNinthMobile.style.display = "none";
}
function checkPage(){
    clearCheckPage();
    clearFirstSrc();
    
    let contentIframes = "";
    switch(currentPage){
        case 1:
            contentIframes = contentIssueFirst.querySelectorAll("#content_issue_video_iframe");
            contentIframes[0].src = youtubeOne;
            contentIframes[1].src = youtubeTwo;
            contentIframes[2].src = youtubeThree;
            prevButton.style.visibility = "hidden";
            contentIssueFirst.style.display = "flex";
            break;
        case 2:
            contentIframes = contentIssueSecond.querySelectorAll("#content_issue_video_iframe");
            contentIframes[0].src = youtubeFour;
            contentIframes[1].src = youtubeFive;
            contentIframes[2].src = youtubeSix;
            contentIssueSecond.style.display = "flex";
            break;
        case 3:
            contentIframes = contentIssueThird.querySelectorAll("#content_issue_video_iframe");
            contentIframes[0].src = youtubeSeven;
            contentIframes[1].src = youtubeEight;
            contentIframes[2].src = youtubeNine;
            nextButton.style.visibility = "hidden";
            contentIssueThird.style.display = "flex";
            break;
    }
}

function checkPageTablet(){
    clearCheckPageTablet();
    clearTabletSrc();

    let contentIframes = "";
    switch(currentPageTablet){
        case 1:
            contentIframes = contentIssueFirstTablet.querySelectorAll("#content_issue_tablet_video_iframe");
            contentIframes[0].src = youtubeOne;
            contentIframes[1].src = youtubeTwo;
            prevButtonTablet.style.visibility = "hidden";
            contentIssueFirstTablet.style.display = "flex";
            break;
        case 2:
            contentIframes = contentIssueSecondTablet.querySelectorAll("#content_issue_tablet_video_iframe");
            contentIframes[0].src = youtubeThree;
            contentIframes[1].src = youtubeFour;
            contentIssueSecondTablet.style.display = "flex";
            break;
        case 3:
            contentIframes = contentIssueThirdTablet.querySelectorAll("#content_issue_tablet_video_iframe");
            contentIframes[0].src = youtubeFive;
            contentIframes[1].src = youtubeSix;
            contentIssueThirdTablet.style.display = "flex";
            break;
        case 4:
            contentIframes = contentIssueFourthTablet.querySelectorAll("#content_issue_tablet_video_iframe");
            contentIframes[0].src = youtubeSeven;
            contentIframes[1].src = youtubeEight;
            contentIssueFourthTablet.style.display = "flex";
            break;
        case 5:
            contentIframes = contentIssueFifthTablet.querySelectorAll("#content_issue_tablet_video_iframe");
            contentIframes[0].src = youtubeNine;
            nextButtonTablet.style.visibility = "hidden";
            contentIssueFifthTablet.style.display = "flex";
            break;
        }
}

function checkPageMobile(){
    clearCheckPageMobile();
    clearMobileSrc();
    let contentIframes = "";
    switch(currentPageMobile){
        case 1:
            contentIframes = contentIssueFirstMobile.querySelector("#content_issue_mobile_video_iframe");
            contentIframes.src = youtubeOne;
            prevButtonMobile.style.visibility = "hidden";
            contentIssueFirstMobile.style.display = "flex";
            break;
        case 2:
            contentIframes = contentIssueSecondMobile.querySelector("#content_issue_mobile_video_iframe");
            contentIframes.src = youtubeTwo;
            contentIssueSecondMobile.style.display = "flex";
            break;
        case 3:
            contentIframes = contentIssueThirdMobile.querySelector("#content_issue_mobile_video_iframe");
            contentIframes.src = youtubeThree;
            contentIssueThirdMobile.style.display = "flex";
            break;
        case 4:
            contentIframes = contentIssueFourthMobile.querySelector("#content_issue_mobile_video_iframe");
            contentIframes.src = youtubeFour;
            contentIssueFourthMobile.style.display = "flex";
            break;
        case 5:
            contentIframes = contentIssueFifthMobile.querySelector("#content_issue_mobile_video_iframe");
            contentIframes.src = youtubeFive;
            contentIssueFifthMobile.style.display = "flex";
            break;
        case 6:
            contentIframes = contentIssueSixthMobile.querySelector("#content_issue_mobile_video_iframe");
            contentIframes.src = youtubeSix;
            contentIssueSixthMobile.style.display = "flex";
            break;
        case 7:
            contentIframes = contentIssueSeventhMobile.querySelector("#content_issue_mobile_video_iframe");
            contentIframes.src = youtubeSeven;
            contentIssueSeventhMobile.style.display = "flex";
            break;
        case 8:
            contentIframes = contentIssueEighthMobile.querySelector("#content_issue_mobile_video_iframe");
            contentIframes.src = youtubeEight;
            contentIssueEighthMobile.style.display = "flex";
            break;
        case 9:
            contentIframes = contentIssueNinthMobile.querySelector("#content_issue_mobile_video_iframe");
            contentIframes.src = youtubeNine;
            nextButtonMobile.style.visibility = "hidden";
            contentIssueNinthMobile.style.display = "flex";
            break;
        }
}

function goPrev(){
    currentPage -= 1;
    presentButton.innerText = ` ${currentPage} / ${totalPages} `
    checkPage();
}
function goNext(){
    currentPage += 1;
    presentButton.innerText = ` ${currentPage} / ${totalPages} `
    checkPage();
}

function goPrevTablet(){
    currentPageTablet -= 1;
    presentButtonTablet.innerText = ` ${currentPageTablet} / ${totalPagesTablet} `
    checkPageTablet();
}
function goNextTablet(){
    currentPageTablet += 1;
    presentButtonTablet.innerText = ` ${currentPageTablet} / ${totalPagesTablet} `
    checkPageTablet();
}

function goPrevMobile(){
    currentPageMobile -= 1;
    presentButtonMobile.innerText = ` ${currentPageMobile} / ${totalPagesMobile} `
    checkPageMobile();
}
function goNextMobile(){
    currentPageMobile += 1;
    presentButtonMobile.innerText = ` ${currentPageMobile} / ${totalPagesMobile} `
    checkPageMobile();
}