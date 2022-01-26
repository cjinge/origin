/*
<div class="img_bg" style="background-image: url(./img/t-1-213373_640x480.jpg);">
    <div class="dark">
        <div class="txt_box">
            <h4 class="title"></h4>
            <p class="date"></p>
            <p class="text"></p>
            <div class="zoom">
                <a href="">
                    <div class="zoom_box">
                        <img src="./img/zoom.png" alt="">
                    </div>
                </a>
            </div>
        </div>
    </div>
</div>
*/

var $article_arr = [//이미지명, 타이틀, 날짜, <텍스트>
    ["t-1-213373_640x480.jpg", "Make a Whish", "2020.08.19"/*, "This work is about the centimental & cute baby."*/],
    ["t-3-325075_640x480.jpg", "Purple Haze", "2020.07.29"],
    ["t-21-545213_640x480.jpg", "Masked Model", "2020.04.30"],
    ["t-7-360109_640x480.jpg", "Birds of Beauty", "2020.05.04"],
    ["t-8-308603_640x480.jpg", "Summer Wheat", "2019.06.14"],
    ["t-9-340072_640x480.jpg", "Before the Storm", "2021.03.17"],
    ["t-17-247234_640x480.jpg", "Young Woman", "2019.10.07"],
    ["shutterstock_58264459-111274_640x480.jpg", "Before the Storm", "2020.12.24"],
    ["t-13-584189_640x480.jpg", "A Loving Couple", "2021.02.21"],
    ["shutterstock_56785618-132726_640x480.jpg", "Spiral Staircase", "2019.10.13"],
    ["t-5-236106_640x480.jpg", "Lonely Ladybug", "2021.01.16"],
    ["t3-8-321596_640x480.jpg", "Emphasis Lafuta", "2020.07.07"],
    ["t-19-373493_640x480.jpg", "Monk Walks", "2021.03.12"],
    ["t3-9-289799_640x480.jpg", "Arena Vivian", "2020.04.05"]
];

var $article = document.querySelector("#article");
var $article_case = "";

function article(img, title, date){
    $article_case += `
        <div class='img_bg' style='background-image: url(./img/`+img+`)'>
            <div class="dark">
                <div class="txt_box">
                    <h4 class="title">`+title+`</h4>
                    <p class="date">`+date+`</p>
                    <div class="line"></div>

                    <div class="zoom">
                        <a href="">
                            <div class="zoom_box">
                                <img src="./img/zoom.png" alt="돋보기 이미지">
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    console.log($article);
}

for(i=0; i<$article_arr.length; i++){
    article($article_arr[i][0], $article_arr[i][1], $article_arr[i][2]);
    $article.innerHTML = $article_case;
}

//.text 추가하기
var $article_first = document.querySelector("#article .img_bg:nth-child(1) .txt_box");
console.log($article_first);
var $article_first_text = document.createElement("p");;

$article_first_text.textContent = "This work is about the centimental & cute baby.";
$article_first_text.setAttribute("class", "text");
$article_first.appendChild($article_first_text);

//.text 위로 옮기기
var $article_zoom = document.querySelector("#article .txt_box .zoom");
var $article_last_Text = document.querySelector("#article .txt_box .text");
$article_last_Text.after($article_zoom);