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

function moverSnake(tablero,dirreccion){
      //La funcion indexOf devuelve -1 siempre que no encuentra el elemento que busca
      let pocisiones=[]
      let ejeY;
      let ejeX;
      for (let i = 0; i < tablero.length; i++) {
            if(tablero[i].indexOf("snake")!=-1){
                  ejeY=i;
                  ejeX=tablero[i].indexOf("snake");
                  tablero[ejeY][ejeX]=null;
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

function pintarTablero(tablero) {
      $(".tablero-grid").empty();
      $(".tablero-grid").append(`                  
                  <div class="fila">
                        <div>${tablero[0][0]}</div><div>${tablero[0][1]}</div><div>${tablero[0][2]}</div><div>${tablero[0][3]}</div><div>${tablero[0][4]}</div><div>${tablero[0][5]}</div><div>${tablero[0][6]}</div><div>${tablero[0][7]}</div>
                  </div>
                  <div class="fila">
                        <div>${tablero[1][0]}</div><div>${tablero[1][1]}</div><div>${tablero[1][2]}</div><div>${tablero[1][3]}</div><div>${tablero[1][4]}</div><div>${tablero[1][5]}</div><div>${tablero[1][6]}</div><div>${tablero[1][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[2][0]}</div><div>${tablero[2][1]}</div><div>${tablero[2][2]}</div><div>${tablero[2][3]}</div><div>${tablero[2][4]}</div><div>${tablero[2][5]}</div><div>${tablero[2][6]}</div><div>${tablero[2][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[3][0]}</div><div>${tablero[3][1]}</div><div>${tablero[3][2]}</div><div>${tablero[3][3]}</div><div>${tablero[3][4]}</div><div>${tablero[3][5]}</div><div>${tablero[3][6]}</div><div>${tablero[3][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[4][0]}</div><div>${tablero[4][1]}</div><div>${tablero[4][2]}</div><div>${tablero[4][3]}</div><div>${tablero[4][4]}</div><div>${tablero[4][5]}</div><div>${tablero[4][6]}</div><div>${tablero[4][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[5][0]}</div><div>${tablero[5][1]}</div><div>${tablero[5][2]}</div><div>${tablero[5][3]}</div><div>${tablero[5][4]}</div><div>${tablero[5][5]}</div><div>${tablero[5][6]}</div><div>${tablero[5][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[6][0]}</div><div>${tablero[6][1]}</div><div>${tablero[6][2]}</div><div>${tablero[6][3]}</div><div>${tablero[6][4]}</div><div>${tablero[6][5]}</div><div>${tablero[6][6]}</div><div>${tablero[6][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[7][0]}</div><div>${tablero[7][1]}</div><div>${tablero[7][2]}</div><div>${tablero[7][3]}</div><div>${tablero[7][4]}</div><div>${tablero[7][5]}</div><div>${tablero[7][6]}</div><div>${tablero[7][7]}</div>
                  </div>`);
      for (let i = 0; i < tablero.length; i++) {
            for (let j = 0; j < tablero[i].length; j++) {
                  if(tablero[i][j]=="snake"){
                        $(`.fila:nth-child(${i})>div:nth-child(${j})`).append("<div class='snake'></div>");
                  }
                  if (tablero[i][j]=="manzana") {
                        $(`.fila:nth-child(${i})>div:nth-child(${j})`).append("<div class='manzana'></div>");
                  }
            }
            
      }
      return tablero;
}
/**
 * "use strict";

//Crear un tablero
function crearTablero() {
      let tablero=[];
      for(let i=0 ; i<8 ; i++){
            tablero[i]=Array(8);
      }
      tablero[3][3]="snake"
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

//Recibe una matriz OJO la matriz debe ya tener posicionada la manzana y la snake
//vacia el contenedor html <"tablero-grid">
//recorre la matriz y pinta los correspondientes elementos
function pintarTablero(tablero) {
      $(".tablero-grid").empty();
      $(".tablero-grid").append(`                  
                  <div class="fila">
                        <div>${tablero[0][0]}</div><div>${tablero[0][1]}</div><div>${tablero[0][2]}</div><div>${tablero[0][3]}</div><div>${tablero[0][4]}</div><div>${tablero[0][5]}</div><div>${tablero[0][6]}</div><div>${tablero[0][7]}</div>
                  </div>
                  <div class="fila">
                        <div>${tablero[1][0]}</div><div>${tablero[1][1]}</div><div>${tablero[1][2]}</div><div>${tablero[1][3]}</div><div>${tablero[1][4]}</div><div>${tablero[1][5]}</div><div>${tablero[1][6]}</div><div>${tablero[1][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[2][0]}</div><div>${tablero[2][1]}</div><div>${tablero[2][2]}</div><div>${tablero[2][3]}</div><div>${tablero[2][4]}</div><div>${tablero[2][5]}</div><div>${tablero[2][6]}</div><div>${tablero[2][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[3][0]}</div><div>${tablero[3][1]}</div><div>${tablero[3][2]}</div><div>${tablero[3][3]}</div><div>${tablero[3][4]}</div><div>${tablero[3][5]}</div><div>${tablero[3][6]}</div><div>${tablero[3][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[4][0]}</div><div>${tablero[4][1]}</div><div>${tablero[4][2]}</div><div>${tablero[4][3]}</div><div>${tablero[4][4]}</div><div>${tablero[4][5]}</div><div>${tablero[4][6]}</div><div>${tablero[4][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[5][0]}</div><div>${tablero[5][1]}</div><div>${tablero[5][2]}</div><div>${tablero[5][3]}</div><div>${tablero[5][4]}</div><div>${tablero[5][5]}</div><div>${tablero[5][6]}</div><div>${tablero[5][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[6][0]}</div><div>${tablero[6][1]}</div><div>${tablero[6][2]}</div><div>${tablero[6][3]}</div><div>${tablero[6][4]}</div><div>${tablero[6][5]}</div><div>${tablero[6][6]}</div><div>${tablero[6][7]}</div>
                  </div>
                  <div class="fila">
                         <div>${tablero[7][0]}</div><div>${tablero[7][1]}</div><div>${tablero[7][2]}</div><div>${tablero[7][3]}</div><div>${tablero[7][4]}</div><div>${tablero[7][5]}</div><div>${tablero[7][6]}</div><div>${tablero[7][7]}</div>
                  </div>`);
      for (let i = 0; i < tablero.length; i++) {
            for (let j = 0; j < tablero[i].length; j++) {
                  if(tablero[i][j]=="snake"){
                        $(`.fila:nth-child(${i+1})>div:nth-child(${j+1})`).empty()
                        $(`.fila:nth-child(${i+1})>div:nth-child(${j+1})`).append("<div class='snake'>snake</div>");
                  }
                  if (tablero[i][j]=="manzana") {
                        $(`.fila:nth-child(${i+1})>div:nth-child(${j+1})`).append("<div class='manzana'></div>");
                  }
            }
            
      }

}

function moverSnake(tablero,dirreccion){
      //La funcion indexOf devuelve -1 siempre que no encuentra el elemento que busca
      let pocisiones=[]
      let ejeY;
      let ejeX;
      for (let i = 0; i < tablero.length; i++) {
            if(tablero[i].indexOf("snake")!=-1){
                  ejeY=i;
                  ejeX=tablero[i].indexOf("snake");
                  console.log(ejeX+" "+ejeY+" EJEX Y EJEY");
                  
                  tablero[ejeY][ejeX]=undefined;
            }
      }
      if (dirreccion=="w") {
            ejeY=ejeY-1;
      }
      else if (dirreccion=="a") {
            ejeX=ejeX-1;
      }
      else if (dirreccion=="s") {
            ejeY=ejeY+1;
      }
      else if (dirreccion=="d") {
            ejeX=ejeX+1;
      }
      tablero[ejeY][ejeX]="snake";

      
      return tablero;
}
let tb = crearTablero();

console.log(tb);

let tba = posicionManzana(tb);
//Crear un objeto serpiente con {Dirrecion, largo, vivo}



//Jquery
$(document).ready(function () {
      let entradaDireccion;
      

      
      let movimientos = ["w","a","s","d"];
      $("*").keyup(function (e) { 
            if (movimientos.includes(e.key.toLowerCase())) {
                  console.log(e.key);
                  entradaDireccion = e.key.toLowerCase();
                 moverSnake(tba,entradaDireccion);
                 pintarTablero(tba);
                 console.log($(".tablero-grid").html());   
            }


            
      });
      setInterval( pintarTablero(tba),600)
      console.log($(".tablero-grid").html());
});
 */
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