function crearTablero() {
    let tablero=[];
    for(let i=0 ; i<8 ; i++){
          tablero[i]=Array(8);
    }
    tablero[4][4]="snake";
    tablero[3][4]="snake";
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


function moverSerpiente(tablero,entradaDireccion){
      entradasValidas =["w","a","s","d"];
      if (!entradasValidas.includes(entradaDireccion)) {
            console.log("Entrada incorrecta");
            return; 
      }
}


 */

let tb = crearTablero();
function moverSnake(tablero,serpiente) {
      let ejeY;
      let ejeX;
      //Ubicar las coordenadas de la matriz en donde se encuentra "snake" X

      //Almanecarlas en @posicionesSerpiente[]
      let posicionesSerpiente=serpiente.pocisiones;
      let cabezaSerpiente=serpiente.pocisiones[0];
      //Convertir la entrada en una coordenada (Operar La cabeza de la serpiente 
      //)
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
      //Pintar la serpiente en el tablero
      //Devolver el tablero y la serpiente pero actualizar el tablero

      pocisionesSerpiente.push([ejeY,ejeX]);
      
      if (!( ejeY < 0 || ejeX < 0 || ejeY >= tablero.length || ejeX >= tablero[0].length)) {
            while (pocisionesSerpiente.length>serpiente.largo) {
                  tablero[pocisionesSerpiente[0][0]][pocisionesSerpiente[0][1]]=undefined;
                  pocisionesSerpiente.shift();
            }
            console.log("despues",pocisionesSerpiente.length);
            for (let i = 0; i < pocisionesSerpiente.length; i++) {
                  tablero[pocisionesSerpiente[i][0]][pocisionesSerpiente[i][1]]="snake"; 
            }

            
      }else{
            serpiente.vivo=false;
            desactivarJuego();
            console.log("Chocaste Y perdista la partida");
            return {tablero,serpiente};
      }




      //tablero[ejeY][ejeX]="snake";

      return {tablero,serpiente};
}
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
let serpiente ={
      dirreccion:"w",
      largo:0,
      vivo:true,
      posiciones:[[4,4][5,4]]
}
console.log(tb);


let obj = moverSnake(tb,serpiente)
console.log(obj);
obj =moverSnake(obj.tablero,obj.serpiente)
console.log(obj);
obj.serpiente.dirreccion="w";
obj =moverSnake(obj.tablero,obj.serpiente)
console.log(obj);
obj =moverSnake(obj.tablero,obj.serpiente)
console.log(obj);
 