"use strict";

//Crear un tablero
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
      console.log(tablero);
      return tablero;
  }

//Recibe una matriz OJO la matriz debe ya tener posicionada la manzana y la snake
//vacia el contenedor html <"tablero-grid">
//recorre la matriz y pinta los correspondientes elementos
function pintarTablero(tablero) {
      $(".tablero-grid").empty();
      $(".tablero-grid").append(`                  <div class="fila">
                        <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
                  </div>
                  <div class="fila">
                        <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
                  </div>
                  <div class="fila">
                         <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
                  </div>
                  <div class="fila">
                         <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
                  </div>
                  <div class="fila">
                         <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
                  </div>
                  <div class="fila">
                         <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
                  </div>
                  <div class="fila">
                          <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
                  </div>
                  <div class="fila">
                         <div>1</div><div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
                  </div>`);
      for (let i = 0; i < tablero.length; i++) {
            for (let j = 0; j < tablero[i].length; j++) {
                  if(tablero[i][j]=="snake"){
                        $(`.fila:nth-child(${i})>div:nth-child(${j})`).css("background-color", "red");
                  }
                  if (tablero[i][j]=="manzana") {
                        $(`.fila:nth-child(${i})>div:nth-child(${j})`).append("<div class='manzana'></div>");
                  }
            }
            
      }
}

function moverSnake(tablero,dirreccion){
      //La funcion indexOf devuelve -1 siempre que no encuentra el elemento que busca
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
      return tablero;
}
let tb = crearTablero();
let tba = posicionManzana(tb);
//Crear un objeto serpiente con {Dirrecion, largo, vivo}
let ejeY = 4;
let ejeX = 4;
$(document).ready(function () {
      pintarTablero(tba)
      
      let movimientos = ["w","a","s","d"]
      $("*").keypress(function (e) { 
            if (!movimientos.includes(e.key.toLowerCase())) {
                  return;
                  
            }
            console.log(e.key);
            let entrada = e.key.toLowerCase();
            if (entrada=="w") {
                  ejeY-=1;
            }
            if (entrada=="a") {
                  ejeX-=1;
            }
            if (entrada=="s") {
                  ejeY+=1;
            }
            if (entrada=="d") {
                  ejeX+=1;
            }
            $(`.fila:nth-child(${ejeY})>div:nth-child(${ejeX})`).css("background-color", "red");
            
      });
});