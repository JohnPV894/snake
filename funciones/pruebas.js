//Funciones
//Crear una matriz: La funcion debe recibir la longitud de esta como parametro 
      //Colocar la serpiente(Un @string que diga "snake") en su pocision inicial 
function crearTablero(longitud) {
      let tablero=[];
      for(let i=0 ; i<longitud ; i++){
            tablero[i]=Array(longitud);
      }
      //tablero[4][4]="snake";
      //tablero[5][4]="snake";

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
    //tablero[posicionesLibres[posicion][0]][posicionesLibres[posicion][1]]="manzana";
    //console.log(tablero);
    //return tablero;
    return [posicionesLibres[posicion][0],posicionesLibres[posicion][1]]
}



/**
 * "use strict";



 
/**
 * intento dos
 * "use strict";

//Funciones
//Crear una matriz: La funcion debe recibir la longitud de esta como parametro 
      //Colocar la serpiente(Un @string que diga "snake") en su pocision inicial 
function crearTablero() {
      let tablero=[];
      for(let i=0 ; i<8 ; i++){
            tablero[i]=Array(8);
      }
      tablero[3][3]="snake"
      return tablero;
}

//Añadir una "manzana" a la matriz: La funcion debe colocar un @String Manzana en una pocision aleatoria donde no este la serpiente
function posicionManzana(tablero) {
      let posicionesLibres=[];
      //Recorrer y guardar todas las pocisiones libres
      for (let i = 0; i < tablero.length; i++) {
            for (let contador = 0; contador < tablero[i].length; contador++) {
                  if (tablero[i][contador]==null) {
                        posicionesLibres.push([i,contador])
                  }
                  
            }
            
      }
      //Elegir una aleatoria y poner la manzana alli
      let posicionAleatoria =Math.floor(Math.random()*posicionesLibres.length);
      tablero[posicionesLibres[posicionAleatoria][0]][posicionesLibres[posicionAleatoria][1]]="manzana";
      //console.log(tablero);
      return tablero;
}





 */


/**
function moverSnake(tablero,serpiente){
      
      console.log("Ejecuanto moverSnake")
      let pocisionesSerpiente=[];
      let ejeY;
      let ejeX;

      //La funcion indexOf devuelve -1 siempre que no encuentra el elemento que busca
      for (let i = 0; i < tablero.length; i++) {
            for (let j = 0; j < tablero[i].length; j++) {
                  if(tablero[i][j]=="snake"){
                        ejeY = i;
                        ejeX = j;
                        pocisionesSerpiente.push([ejeY,ejeX]);
                        
                  }     
            }
      }
      console.log("antes",pocisionesSerpiente);
      
      //if (ejeY != undefined && ejeX != undefined) {
      //      //tablero[ejeY][ejeX]=undefined;
      //      //serpiente.vivo=false;
      //      //console.log(" perdista la partida");
      //      //return {tablero,serpiente};
      //}else{
      //      serpiente.vivo=false;
      //      console.log("Chocaste Y perdista la partida");
      //      return {tablero,serpiente};
      //}


      switch (serpiente.dirreccion) {
            case "w":
                  ejeY = ejeY-1;
                  break;
            case "a":
                  ejeX = ejeX-1;
                  break;
            case "s":
                  ejeY = ejeY+1;
                  break;
            case "d":
                  ejeX = ejeX+1;
                  break;
      
            default:
                  console.error("Movimiento Invalido")
                  return;
      }
      pocisionesSerpiente.push([ejeY,ejeX]);
      pocisionesSerpiente.shift()
      if (!(ejeY == undefined || ejeX == undefined || ejeY < 0 || ejeX < 0 || ejeY > tablero.length || ejeX > tablero[0].length)   /*|| tablero[ejeY][ejeX]==undefined / ) {

            console.log("despues",pocisionesSerpiente);
            for (let i = 0; i < pocisionesSerpiente.length; i++) {
                  tablero[pocisionesSerpiente[i][0]][pocisionesSerpiente[i][1]]="snake"; 
            }
            console.log("uwu");
            
      }else{
            serpiente.vivo=false;
            //desactivarJuego();
            console.log("Chocaste Y perdista la partida");
            return {tablero,serpiente};
      }

      if(tablero[ejeY][ejeX]=="manzana") {
            serpiente.largo=serpiente.largo+1;
            //$(".puntuacion").empty();
            //$(".puntuacion").append(serpiente.largo);
            tablero=posicionManzana(tablero);

            console.log("manzana comida");
            
      }


      //tablero[ejeY][ejeX]="snake";

      return {tablero,serpiente};
}
 */
let tb = crearTablero();
//function moverSnake(tablero,serpiente) {
      //let ejeY;
      //let ejeX;
      //Ubicar las coordenadas de la matriz en donde se encuentra "snake" X

      //Almanecarlas en @posicionesSerpiente[]
      //let posicionesSerpiente=serpiente.pocisiones;
      //let cabezaSerpiente=serpiente.pocisiones[0];
      //Convertir la entrada en una coordenada (Operar La cabeza de la serpiente 
      //)
     // switch (serpiente.dirreccion) {
     //       case "w":
     //             ejeY = ejeY-1;
     //             break;
     //       case "a":
     //             ejeX = ejeX-1;
     //             break;
     //       case "s":
     //             ejeY = ejeY+1;
     //             break;
     //       case "d":
     //             ejeX = ejeX+1;
     //             break;
     // 
     //       default:
     //             console.error("Movimiento Invalido")
     //             return {tablero,serpiente};
     // }
      //Pintar la serpiente en el tablero
      //Devolver el tablero y la serpiente pero actualizar el tablero

//      console.log(serpiente.posiciones);
//      //for (let i = 0; i < serpiente.posiciones.length; i++) {
////
//      //      tablero[serpiente.posiciones[i][0]][serpiente.posiciones[i][1]]="snake";
//      //      
//      //      
//      //      
//      //}
//
//
//      //tablero[ejeY][ejeX]="snake";
//
//      return {tablero,serpiente};
//}


//Matriz Inicial sin elementos Recibe @number que sera la longitud de esta 
let tableroBase = crearTablero(12);
//Guardo la pocision de la manzana de forma desestructuda para que al momento de comparar sea mas sencillo
let [ejeY,ejeX] = posicionManzana(tableroBase);//[4,4];//
//@objeto{} serpiente 
let serpiente ={
      dirreccion:"w",
      puntuacion:0,
      vivo:true,
      posiciones:[[4,4]]
}
//Mantener juego
let juego;
function desactivarJuego() {
      clearInterval(juego)
}
function moverSnake() {
      console.log("ejecuto moverSnake");
      //Cabeza de la serpiente
      let [Y,X]=serpiente.posiciones[0];
      switch (serpiente.dirreccion) {
            case "w":
                  Y = Y -1;
                  break;
            case "a":
                  X = X -1;
                  break;
            case "s":
                  Y = Y +1;
                  break;
            case "d":
                  X = X +1;
                  break;
            default:
                  console.error("Movimiento Invalido");
                  return;
      }
      if (Y<0 || X<0 || Y>tableroBase.length || X>tableroBase[0].length) {
            console.log("Chocaste con el muro y Perdiste");
            desactivarJuego();
            return;
      }
      if (Y,X==ejeY,ejeX) { 
            console.log("Comido");
            serpiente.posiciones.push([ejeY,ejeX]);
            serpiente.puntuacion++;
            ejeY,ejeX=posicionManzana(tableroBase);
      }else if(Y,X != ejeY,ejeX){
            console.log("No Comido");
            for (let i = serpiente.posiciones.length; 0 < i; i++) {
                  console.log(i);
                  
                  
            }
      }

      for (let i = 0; i < serpiente.posiciones.length; i++) {
            if(serpiente.posiciones[i]==Y,X){
                  console.log("Chocaste Contigo y Perdiste");
                  desactivarJuego();
                  return;
            }
      }


}
moverSnake();
function iniciarJuego(){
      //for (let i = serpiente.posiciones.length; i == -1; i--) {
      //      tablero[serpiente.posiciones[i][0]][serpiente.posiciones[i][1]]="snake";
      //      console.log(i);
      //      
      //      
      //}


}

