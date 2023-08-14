const des = document.getElementById('des').getContext('2d')

// CÉU
const bg_sky_1 = new Background(0,0,1200,700,'./assets/img/background/sky_3/1.png')
const bg_sky_2 = new Background(0,0,1200,700,'./assets/img/background/sky_3/2.png')
const bg_sky_3 = new Background(0,0,1200,700,'./assets/img/background/sky_3/3.png')
const bg_sky_4 = new Background(0,0,1200,700,'./assets/img/background/sky_3/4.png')
const bg_sky_5 = new Background(0,0,1200,700,'./assets/img/background/sky_3/5.png')
const bg_sky_7 = new Background(0,0,1200,700,'./assets/img/background/sky_3/7.png')

// PLAYER
const player = new Player(-35,472,128,128,'./assets/img/player/Archer/walking1.png')

// TEXTO
const vida = new Texto()
const tiro = new Texto()
const pontos = new Texto()

// JOGAR
let jogar = true

//MOVIMENTO
document.addEventListener('keydown', (e)=>{
    if(e.key === 'a'){
        player.dir_x = - 6
    }else if(e.key === 'd'){
        player.dir_x = 6
    }else if(e.key === 's'){
        player.dir_y = 6
    }else if(e.key === 'w'){
        player.dir_y = - 6
    }
})

document.addEventListener('keyup', (e)=>{
    if(e.key === 'a'){
        player.dir_x = 0
    }else if(e.key === 'd'){
        player.dir_x = 0
    }else if(e.key === 's'){
        player.dir_y = 0
    }else if(e.key === 'w'){
        player.dir_y = 0
    }
})

function desenha(){
    bg_sky_1.des_obj()
    bg_sky_2.des_obj()
    bg_sky_3.des_obj()
    bg_sky_4.des_obj()
    bg_sky_5.des_obj()
    bg_sky_7.des_obj()

    player.des_obj()

    vida.des_texto('Vida : ', 10, 30,'black','30px Arial')
    tiro.des_texto('Munição : ', 500, 30,'black','30px Arial')
    pontos.des_texto('Pontos : ', 1050, 30,'black','30px Arial')
}

function atualiza(){
    bg_sky_3.mov(-1000,1200)
    bg_sky_7.mov1(-1200,1200)

    player.anim('walking')
    player.mov()
}

function main(){
    des.clearRect(0,0,1200,600)
    atualiza()
    desenha()
    requestAnimationFrame(main)
}

main()