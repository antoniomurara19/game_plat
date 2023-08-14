class Obj {
    frame = 1
    tempo = 0

    constructor(x,y,w,h,at){
        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h,
        this.at = at
    }

    des_obj(){
        let img = new Image()
        img.src = this.at
        des.drawImage(img,this.x,this.y,this.w,this.h)
    }

    anim(nome){
        this.tempo += 1
        if(this.tempo > 12){
            this.tempo = 0
            this.frame += 1
        }
        if(this.frame > 4){
            this.frame = 1
        }
        this.img = `assets/img/player/Archer/${nome}${this.frame}.png`
    }
}

class Player extends Obj{
    dir_x = 0
    dir_y = 0
    pts = 0
    vidas = 3

    mov(){
        // EIXO X
        this.x += this.dir_x
        console.log(this.x)
        if(this.x <= -35){
            this.x = -35
        }else if(this.x >= 1100){
            this.x = 1100
        }
        // EIXO Y
        this.y += this.dir_y
        if(this.y <= -55){
            this.y = -55
        }else if (this.y >= 472){
            this.y = 472
        }
        this.dir_y += 0.5
    }
}

class Background extends Obj{

    mov(inicio,fim){
        this.x +=1
        if(this.x > fim){
            this.x = inicio
        }
    }

    mov1(inicio,fim){
        this.x +=4
        if(this.x > fim){
            this.x = inicio
        }
    }
}

class Texto{
    des_texto(text,x,y,cor,font){
        des.font = font
        des.fillStyle = cor
        des.fillText(text,x,y)
    }
}