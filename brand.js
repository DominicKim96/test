let items = `<div class="brand_sec_pan pan_active">
<div class="brand_video">
    <video src="../brand/nudake/${brand_item_list[0][0].src}" autoplay loop muted></video>
</div>
<div class="brand_txt">
    <p class="brand_p">${brand_item_list[0][0].txt1}</p>
    <p class="brand_p">${brand_item_list[0][0].txt2}</p>
    <p class="brand_p">${brand_item_list[0][0].txt3}</p>
    <p class="brand_p">${brand_item_list[0][0].txt4}</p>
</div>
<div class="brand_img_box">
    <div class="brand_img_top">
        <div class="brand_img"><img src="../brand/nudake/${brand_item_list[0][0].brand_img1}" alt=""></div>
        <div class="brand_img"><img src="../brand/nudake/${brand_item_list[0][0].brand_img2}" alt=""></div>
        <div class="brand_img"><img src="../brand/nudake/${brand_item_list[0][0].brand_img3}" alt=""></div>
        <div class="brand_img"><img src="../brand/nudake/${brand_item_list[0][0].brand_img4}" alt=""></div>
    </div>
    <div class="brand_img_box_bot">
        <div class="brand_img_s"><img src="../brand/nudake/${brand_item_list[0][0].brand_img1}" alt=""></div>
        <div class="brand_img_s"><img src="../brand/nudake/${brand_item_list[0][0].brand_img2}" alt=""></div>
        <div class="brand_img_s"><img src="../brand/nudake/${brand_item_list[0][0].brand_img3}" alt=""></div>
        <div class="brand_img_s"><img src="../brand/nudake/${brand_item_list[0][0].brand_img4}" alt=""></div>
    </div>
</div>                    
</div>
<div class="brand_sec_pan">
<div class="brand_video">
    <video src="../brand/gentlemonster/${brand_item_list[1][0].src}" autoplay loop muted></video>
</div>
<div class="brand_txt">
    <p class="brand_p brand_p1">${brand_item_list[1][0].txt1}</p>
    <p class="brand_p brand_p1">${brand_item_list[1][0].txt2}</p>
    <p class="brand_p brand_p1">${brand_item_list[1][0].txt3}</p>
</div>
<div class="brand_img_box">
    <div class="brand_img_top">
        <div class="brand_img"><img src="../brand/gentlemonster/${brand_item_list[1][0].brand_img1}" alt=""></div>
        <div class="brand_img"><img src="../brand/gentlemonster/${brand_item_list[1][0].brand_img2}" alt=""></div>
        <div class="brand_img"><img src="../brand/gentlemonster/${brand_item_list[1][0].brand_img3}" alt=""></div>
        <div class="brand_img"><img src="../brand/gentlemonster/${brand_item_list[1][0].brand_img4}" alt=""></div>
    </div>
    <div class="brand_img_box_bot">
        <div class="brand_img_s"><img src="../brand/gentlemonster/${brand_item_list[1][0].brand_img1}" alt=""></div>
        <div class="brand_img_s"><img src="../brand/gentlemonster/${brand_item_list[1][0].brand_img2}" alt=""></div>
        <div class="brand_img_s"><img src="../brand/gentlemonster/${brand_item_list[1][0].brand_img3}" alt=""></div>
        <div class="brand_img_s"><img src="../brand/gentlemonster/${brand_item_list[1][0].brand_img4}" alt=""></div>
    </div>
</div>                    
</div>
<div class="brand_sec_pan">
<div class="brand_video">
    <video src="../brand/tamburins/${brand_item_list[2][0].src}" autoplay loop muted></video>
</div>
<div class="brand_txt">
    <p class="brand_p brand_p1">${brand_item_list[2][0].txt1}</p>
    <p class="brand_p brand_p1">${brand_item_list[2][0].txt2}</p>
    <p class="brand_p brand_p1">${brand_item_list[2][0].txt3}</p>
</div>
<div class="brand_img_box">
    <div class="brand_img_top">
        <div class="brand_img"><img src="../brand/tamburins/${brand_item_list[2][0].brand_img1}" alt=""></div>
        <div class="brand_img"><img src="../brand/tamburins/${brand_item_list[2][0].brand_img2}" alt=""></div>
        <div class="brand_img"><img src="../brand/tamburins/${brand_item_list[2][0].brand_img3}" alt=""></div>
        <div class="brand_img"><img src="../brand/tamburins/${brand_item_list[2][0].brand_img4}" alt=""></div>
    </div>
    <div class="brand_img_box_bot">
        <div class="brand_img_s"><img src="../brand/tamburins/${brand_item_list[2][0].brand_img1}" alt=""></div>
        <div class="brand_img_s"><img src="../brand/tamburins/${brand_item_list[2][0].brand_img2}" alt=""></div>
        <div class="brand_img_s"><img src="../brand/tamburins/${brand_item_list[2][0].brand_img3}" alt=""></div>
        <div class="brand_img_s"><img src="../brand/tamburins/${brand_item_list[2][0].brand_img4}" alt=""></div>
    </div>
</div>                    
</div>
`;
document.getElementsByClassName('brand_sec_box')[0].innerHTML = items;

// *************brand_nav

let brand_nav_li = document.getElementsByClassName('brand_nav_li');
let brand_sec_pan = document.getElementsByClassName('brand_sec_pan');

for(let i=0; i < brand_nav_li.length; i++) {
    brand_nav_li[i].addEventListener('click', function() {
        for(let j=0; j < brand_sec_pan.length; j++) {
            brand_sec_pan[j].classList.remove('pan_active')
            brand_nav_li[j].classList.remove('brand_nav_li_act')
        }
        brand_sec_pan[i].classList.add('pan_active')
        brand_nav_li[i].classList.add('brand_nav_li_act')
    })
}


// console.log(document.getElementsByClassName('brand_txt')[0].getBoundingClientRect().top)

// }

// -------------------아코디언
// let ham_chk = [true,true,true];
// function btn(num) { 
//     if(ham_chk[num]) {
//         document.getElementsByClassName('menu_li_sec')[num].style.height="90" + "px"
//     }
//     else {
//         document.getElementsByClassName('menu_li_sec')[num].style.height="0"
//     } 
//     console.log(ham_chk)
//     ham_chk[num] = !ham_chk[num];
// }

let menu_li = document.getElementsByClassName('menu_li')
let menu_li_tit = document.getElementsByClassName('menu_li_tit');
let menu_li_sec = document.getElementsByClassName('menu_li_sec');

for(let i=0; i<menu_li_tit.length; i++) {
    menu_li_tit[i].addEventListener('click', function(){

        if(this.nextElementSibling != null) {
            let menu_li_sec_h = 0;
            console.log(this.parentElement.clientHeight, menu_li_sec_h)
            if(this.parentElement.clientHeight <= 37)
                menu_li_sec_h = this.nextElementSibling.clientHeight;

                this.parentElement.style.height = 37 + menu_li_sec_h +"px"
        }
    })
}

// --------------문구
let innerHeight = window.innerHeight;
let scrollY = window.scrollY;
let viewHeight = scrollY + innerHeight;

let brand_p1 = document.getElementsByClassName('brand_p')[0];
let brand_p2 = document.getElementsByClassName('brand_p')[1];
let brand_p3 = document.getElementsByClassName('brand_p')[2];
let brand_p4 = document.getElementsByClassName('brand_p')[3];

window.addEventListener('scroll', function(){
    console.log(document.getElementsByClassName('brand_txt')[0].getBoundingClientRect().top)
    viewHeight = window.scrollY + innerHeight;
    // console.log(viewHeight)
    if(viewHeight >= 1260) {
        // console.log(viewHeight)
        brand_p1.classList.add('brand_p_active')
        setTimeout(function() {
            brand_p2.classList.add('brand_p_active')
            setTimeout(function() {
                brand_p3.classList.add('brand_p_active')
                setTimeout(function() {
                    brand_p4.classList.add('brand_p_active')
                }, 200)
            }, 200)
        }, 200)
    }
})
// ---------------------------brand_img 교체

let brand_img_s = document.getElementsByClassName('brand_img_s');
let brand_img = document.getElementsByClassName('brand_img');

for(let i=0; i < brand_img_s.length; i++) {
    brand_img_s[i].addEventListener('click', function() {
    for(let j=0; j < brand_img.length; j++) {
        brand_img[j].classList.remove('img_active')
    }
    brand_img[i].classList.add('img_active')
    })
}

