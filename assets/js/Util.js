class Obj {
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

}

class Arqueiro extends Obj{
    
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