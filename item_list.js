const ITEM_LIST = [
    // 하우스 도산, 성수
    [
        {item_no: 1, src: '1.peak.jpg', menu: 'PEAK 피크', price: 39000},
        {item_no: 2, src: '2.birth.jpg', menu: 'BIRTH 벌스', price: 32000},
        {item_no: 3, src: '3.peak_small.jpg', menu: 'PEAK SMALL 피크 스몰', price: 25000},
        {item_no: 4, src: '4.white_peak.jpg', menu: 'WHITE PEAK.S 화이트피크 스몰', price: 25000},
        {item_no: 5, src: '5.piece.jpg', menu: 'PIECE 피스', price: 12000},
        {item_no: 6, src: '6.noir.jpg', menu: 'NOIR 누아르', price: 7500},
        {item_no: 7, src: '7.tomato1.jpg', menu: 'TOMATO1 토마토1', price: 12000},
        {item_no: 8, src: '8.tomato2.jpg', menu: 'TOMATO2 토마토2', price: 12000},
        {item_no: 9, src: '9.colosseo.jpg', menu: 'COLOSSEO.S 콜로세오 스몰', price: 12000},
        {item_no: 10, src: '10.fog.jpg', menu: 'FOG.S 포그 스몰', price: 15000},
        {item_no: 11, src: '11.pieta.jpg', menu: 'PIETA 피에타', price: 12000}
    ],
    //신사
    [
        {item_no: 1, src: '1.명란오니와상.png', menu: '명란 오니와상', price: 5500},
        {item_no: 2, src: '2.김치오니와상.png', menu: '김치 오니와상', price: 5500},
        {item_no: 3, src: '3.파오니와상.png', menu: '파 오니와상', price: 5500},
        {item_no: 4, src: '4.바질레몬오니와상.png', menu: '바질 레몬 오니와상', price: 5500},
        {item_no: 5, src: '5.피크오니와상.png', menu: '피크 오니와상', price: 5500},
        {item_no: 6, src: '6.호두바닐라오니와상.png', menu: '호두 바닐라 오니와상', price: 5500},
        {item_no: 7, src: '7.에그플랜트갈레트.png', menu: '에그플랜트 갈레트', price: 11000},
        {item_no: 8, src: '8.토마토갈레트.png', menu: '토마토 갈레트', price: 11000},
        {item_no: 9, src: '9.어니언갈레트.png', menu: '어니언 갈레트', price: 11000},
        {item_no: 10, src: '10.크로스틱.png', menu: '크로스틱', price: 5500},
        {item_no: 11, src: '11.아가손파이.png', menu: '아가 손 파이', price: 6000},
        {item_no: 12, src: '12.콘사워크림샌드위치.png', menu: '콘 사워크림 샌드위치', price: 5500},
        {item_no: 13, src: '13.소시지크로피자.png', menu: '소시지 크로피자', price: 6500},
        {item_no: 14, src: '14.바질크로피자.png', menu: '바질 크로피자', price: 6500},
        {item_no: 15, src: '15.프루트페이스트리.png', menu: '프루트 페이스트리', price: 6500}
    ]
]; 
// brand_item_list[0][1][2].txt_no
const brand_item_list = [

    // 누데이크
    [
        {
            src: 'nudake.mp4', 
            txt1: '패션과 아트를 합쳐 특별한 디저트를 만든다는 누데이크',
            txt2: '패션 브랜드 젠틀몬스터의 아이아이컴바인드가 론칭한 ‘누데이크 하우스 도산’.',
            txt3: '‘새로운(New)’ ‘다른(Different)’ ‘케이크(Cake)’ 세 가지 단어를 조합한 상호 ‘NUDAKE’는 지금까지 경험해보지 못했던 케이크를 만들고자 합니다.',
            txt4: '공간감을 살린 매장 내부에 들어서면 오브제와 조형물들이 곳곳에 놓여 있어 전시장에 와있는 듯한 느낌을 줍니다.',
            brand_img1: '1.jpg',
            brand_img2: '2.jpg',
            brand_img3: '3.jpg',
            brand_img4: '4.jpg'
        }
    ],
    // 젠틀몬스터
    [
        {
            src: 'gentle.mp4',
            txt1:'독특하고 미래지향적인 디자인이 특징으로 2011년 출시했습니다.',
            txt2:'미래의 소매업에 대한 젠틀몬스터의 시각을 제시하고, 고객에게 직관적인 메시지를 1차원적으로 전하기 보다는, 호기심을 자극할 수 있는 추상적 주제를 던져 더 새롭고 재밌는 상상을 많이 할 수 있도록 지향한다.',
            txt3:'매장에 들어가면 제품을 사는 매장이 아닌 갤러리에 들어간 듯한 느낌을 줄수있게 하였습니다.',
            brand_img1: '1.jpg',
            brand_img2: '2.jpg',
            brand_img3: '3.jpg',
            brand_img4: '4.jpg'
        }
    ],
    // 템버린즈
    [
        {
            src: 'tamburins.mp4',
            txt1:'젠틀몬스터에서 만든 프래그런스 브랜드로 감각적인 아름다움을 추구하고 2017년 탄생했습니다.',
            txt2:'해당 플래그십 스토어를 입장하면 화장품 매장이 아닌 갤러리에 입장한 느낌을 주는데 화장품을 단순한 제품이 아닌 콘텐츠로 인식하여 이를 새로운 접근 방식으로 느끼는방향으로 디자인 합니다.',
            txt3:'매장에 들어가면 제품을 사는 매장이 아닌 갤러리에 들어간 듯한 느낌을 줄수있게 하였습니다.',
            brand_img1: '1.jpg',
            brand_img2: '2.jpg',
            brand_img3: '3.jpg',
            brand_img4: '4.jpg'
        }
    ]
]

// const PAGETITLE = ["하우스 도산", "신사"];


// let cateNo = get_url_info("cateNo")


// document.getElementById("....").innerText = PAGETITLE[cateNo]