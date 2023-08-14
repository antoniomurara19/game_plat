const des = document.getElementById('des').getContext('2d')

const bg_sky_1 = new Background(0,0,1200,700,'./assets/img/background/sky_3/1.png')
const bg_sky_2 = new Background(0,0,1200,700,'./assets/img/background/sky_3/2.png')
const bg_sky_3 = new Background(0,0,1200,700,'./assets/img/background/sky_3/3.png')
const bg_sky_4 = new Background(0,0,1200,700,'./assets/img/background/sky_3/4.png')
const bg_sky_5 = new Background(0,0,1200,700,'./assets/img/background/sky_3/5.png')
const bg_sky_6 = new Background(0,0,1200,700,'./assets/img/background/sky_3/6.png')
const bg_sky_7 = new Background(0,0,1200,700,'./assets/img/background/sky_3/7.png')

function desenha(){
    bg_sky_1.des_obj()
    bg_sky_2.des_obj()
    bg_sky_3.des_obj()
    bg_sky_4.des_obj()
    bg_sky_5.des_obj()
    bg_sky_6.des_obj()
    bg_sky_7.des_obj()
}

function atualiza(){
    bg_sky_3.mov(-1000,1200)
    bg_sky_7.mov1(-1200,1200)
}

function main(){
    des.clearRect(0,0,1200,700)
    atualiza()
    desenha()
    requestAnimationFrame(main)
}

main()