let section1 = document.getElementsByClassName('section1')[0];
let section2 = document.getElementsByClassName('section2')[0];
let section3 = document.getElementsByClassName('section3')[0];
let section4 = document.getElementsByClassName('section4')[0];
let section5 = document.getElementsByClassName('section5')[0];

let event_sec = document.getElementsByClassName('event_sec')[0];

let event_box = document.getElementsByClassName('event_box')[0];
let follow_us_box = document.getElementsByClassName('follow_us_box')[0];
let follow_us_box_sec_top = document.getElementsByClassName('follow_us_box_sec_top')[0];
let follow_us_box_sec_bot = document.getElementsByClassName('follow_us_box_sec_bot')[0];

let innerHeight = window.innerHeight;
let scrollY = window.scrollY;
let viewHeight = scrollY + innerHeight;

console.log(scrollY , innerHeight);


window.addEventListener('resize', function(){ 
    console.log(follow_us_box_sec_top.innerHeight)
})
    
window.addEventListener('scroll', function(){
    viewHeight = window.scrollY + innerHeight;

    // console.log(viewHeight)
    if(viewHeight >= 4150) {
        follow_us_box_sec_top.classList.add('follow_us_box_sec_active')
        follow_us_box_sec_bot.classList.add('follow_us_box_sec_active')
    }

    else if(viewHeight >= 3950) {
        follow_us_box.classList.add('box_active')
    }

    else if(viewHeight >= 3470) {
        event_box.classList.add('box_active')
        event_sec.classList.add('event_sec_active')
    }

    else if(viewHeight >= 2850) {
        section4.classList.add('section_active')
        section5.classList.add('section_active')
    }

    else if(viewHeight >= 2160) {
        section3.classList.add('section_active1')
    }

    else if(viewHeight >= 1250) {
        section1.classList.add('section_active')
        setTimeout(function() {
            section2.classList.add('section_active')
        }, 500)
    }

})



$(document).ready(function() {
    let main_banner_slide = 0;
    setInterval(function(){
        if(main_banner_slide > 9) {
            main_banner_slide = 0;
        }
        $('.main_banner').removeClass("main_banner_active")
        $('.main_banner').eq(main_banner_slide).addClass("main_banner_active");

        main_banner_slide++;
    }, 2000)

    let event_item_size = $('.event_sec_box').eq(0).outerWidth();
    let event_item_length = $('.event_sec_box').length;

    for(let i=0; i<event_item_length; i++) {
        $('.event_sec_box').eq(i).css({ left: (event_item_size * i) + (8 * i)})
    }

    let bang_no = 0;
    let bang_interval;
    function bang_slide() {
        bang_interval = setInterval(function(){
            $('.event_sec_box').animate({
                left: `-=${event_item_size+8}px`
            }, 3000)

            $('.event_sec_box').eq(bang_no % event_item_length).animate({
                left: '2156px'
            },0)

            bang_no+=1;

        }, 4500);

    }
    
    bang_slide()
})