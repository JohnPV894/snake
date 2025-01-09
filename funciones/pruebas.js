function crearTablero() {
    let tablero=[];
    for(let i=0 ; i<8 ; i++){
          tablero[i]=Array(8);
    }
    tablero[4][4]="snake"
    return tablero;
}
//Pocisionar una manzana en una posicion aleatoria donde no haya ningun otro elemento
function posicionManzana(tablero) {
    let posicionesLibres=[];
    for (let i = 0; i < tablero.length; i++) {
          for (let contador = 0; contador < tablero[i].length; contador++) {
                if (tablero[i][contador]==null) {
                      posicionesLibres.push([i,contador])
                }
                
          }
          
    }
    let posicion =Math.floor(Math.random()*posicionesLibres.length);
    tablero[posicionesLibres[posicion][0]][posicionesLibres[posicion][1]]="manzana";
    //console.log(tablero);
    return tablero;
}

//tablero[posicionesLibres[0][0]][posicionesLibres[1][1]]="manzana";
//console.log(tablero);

let tb = crearTablero();
posicionManzana(tb);

function moverSnake(tablero,dirreccion,largo){
      //La funcion indexOf devuelve -1 siempre que no encuentra el elemento que busca
      let pocisiones=[]
      let ejeY;
      let ejeX;
      for (let i = 0; i < tablero.length; i++) {
            if(tablero[i].indexOf("snake")!=-1){
                  ejeY=i;
                  ejeX=tablero[i].indexOf("snake");
                  //console.log("encontrado en "+i+" "+tablero[i].indexOf("snake"));
                  
            }
      }
      if (dirreccion=="w") {
            ejeY-=1;
      }
      if (dirreccion=="a") {
            ejeX-=1;
      }
      if (dirreccion=="s") {
            ejeY+=1;
      }
      if (dirreccion=="d") {
            ejeX+=1;
      }
      tablero[ejeY][ejeX]="snake";
      console.log(tablero);
      
      return tablero;
}
tb=moverSnake(tb,"s");
moverSnake(tb,"s");
