 "use strict";

//Funciones
//Crear una matriz: La funcion debe recibir la longitud de esta como parametro 
      //Colocar la serpiente(Un @string que diga "snake") en su pocision inicial 
function crearTablero(longitud) {
      let tablero=[];
      for(let i=0 ; i<longitud ; i++){
            tablero[i]=Array(longitud);
      }
      tablero[3][3]="snake"
      return tablero;
}

//Añadir una "manzana" a la matriz: La funcion debe colocar un @string Manzana en una pocision aleatoria donde NO este la serpiente
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
      let posicionAleatoria = Math.floor(Math.random()*posicionesLibres.length);
      tablero[posicionesLibres[posicionAleatoria][0]][posicionesLibres[posicionAleatoria][1]]="manzana";
      return tablero;
}

//Mover serpiente: Esta funcion deberia recibir una Entrada que cada cierto tiempo se vaya sumando +1 en esa direccion hasta que se cambie de dirreccion 
function moverSnake(tablero,dirreccion){

      console.log("Ejecuanto moverSnake")
      console.log(tablero.length,"ejeY");
      console.log(tablero[1].length,"ejeX");
      
      let ejeY;
      let ejeX;

      //La funcion indexOf devuelve -1 siempre que no encuentra el elemento que busca
      for (let i = 0; i < tablero.length; i++) {
            if(tablero[i].indexOf("snake")!=-1){
                  ejeY = i;
                  ejeX = tablero[i].indexOf("snake");
                  console.log(ejeX+" "+ejeY+" EJEX Y EJEY");    
                  tablero[ejeY][ejeX]=undefined;
            }
      }

      switch (dirreccion) {
            case "w":
                  ejeY=ejeY-1;
                  break;
            case "a":
                  ejeX=ejeX-1;
                  break;
            case "s":
                  ejeY=ejeY+1;
                  break;
            case "d":
                  ejeX=ejeX+1;
                  break;
      
            default:
                  console.error("Movimiento Invalido")
                  return;
      }
      if (tablero[ejeY][ejeX]=="manzana") {
            
      }
      if (ejeY >= tablero.length || ejeX >= tablero[1].length || ejeY < 0 || ejeX < 0  ) {
            console.log("Chocaste Y perdista la partida");
      }

      tablero[ejeY][ejeX]="snake";

      
      return tablero;
}

//Recibe una matriz OJO la matriz @[[]] debe ya tener posicionada la manzana y la snake
//vacia el contenedor html <"tablero-grid">
//recorre la matriz y pinta los correspondientes elementos
function pintarTablero(tablero) {
      $(".tablero-grid").empty();
      //$(".tablero-grid").append(`                  
      //            <div class="fila">
      //                  <div>${tablero[0][0]}</div><div>${tablero[0][1]}</div><div>${tablero[0][2]}</div><div>${tablero[0][3]}</div><div>${tablero[0][4]}</div><div>${tablero[0][5]}</div><div>${tablero[0][6]}</div><div>${tablero[0][7]}</div>
      //            </div>
      //            <div class="fila">
      //                  <div>${tablero[1][0]}</div><div>${tablero[1][1]}</div><div>${tablero[1][2]}</div><div>${tablero[1][3]}</div><div>${tablero[1][4]}</div><div>${tablero[1][5]}</div><div>${tablero[1][6]}</div><div>${tablero[1][7]}</div>
      //            </div>
      //            <div class="fila">
      //                   <div>${tablero[2][0]}</div><div>${tablero[2][1]}</div><div>${tablero[2][2]}</div><div>${tablero[2][3]}</div><div>${tablero[2][4]}</div><div>${tablero[2][5]}</div><div>${tablero[2][6]}</div><div>${tablero[2][7]}</div>
      //            </div>
      //            <div class="fila">
      //                   <div>${tablero[3][0]}</div><div>${tablero[3][1]}</div><div>${tablero[3][2]}</div><div>${tablero[3][3]}</div><div>${tablero[3][4]}</div><div>${tablero[3][5]}</div><div>${tablero[3][6]}</div><div>${tablero[3][7]}</div>
      //            </div>
      //            <div class="fila">
      //                   <div>${tablero[4][0]}</div><div>${tablero[4][1]}</div><div>${tablero[4][2]}</div><div>${tablero[4][3]}</div><div>${tablero[4][4]}</div><div>${tablero[4][5]}</div><div>${tablero[4][6]}</div><div>${tablero[4][7]}</div>
      //            </div>
      //            <div class="fila">
      //                   <div>${tablero[5][0]}</div><div>${tablero[5][1]}</div><div>${tablero[5][2]}</div><div>${tablero[5][3]}</div><div>${tablero[5][4]}</div><div>${tablero[5][5]}</div><div>${tablero[5][6]}</div><div>${tablero[5][7]}</div>
      //            </div>
      //            <div class="fila">
      //                   <div>${tablero[6][0]}</div><div>${tablero[6][1]}</div><div>${tablero[6][2]}</div><div>${tablero[6][3]}</div><div>${tablero[6][4]}</div><div>${tablero[6][5]}</div><div>${tablero[6][6]}</div><div>${tablero[6][7]}</div>
      //            </div>
      //            <div class="fila">
      //                   <div>${tablero[7][0]}</div><div>${tablero[7][1]}</div><div>${tablero[7][2]}</div><div>${tablero[7][3]}</div><div>${tablero[7][4]}</div><div>${tablero[7][5]}</div><div>${tablero[7][6]}</div><div>${tablero[7][7]}</div>
      //            </div>`);
      let stringHtmlTablero ;
      for (let ii = 0; ii < tablero.length; ii++) {
            
            stringHtmlTablero=stringHtmlTablero.concat(
            `<div class="fila">
                        <div>${tablero[ii][0]}</div><div>${tablero[ii][1]}</div><div>${tablero[ii][2]}</div><div>${tablero[ii][3]}</div><div>${tablero[ii][4]}</div><div>${tablero[ii][5]}</div><div>${tablero[ii][6]}</div><div>${tablero[ii][7]}</div>
            </div>`);
      }
      console.log(stringHtmlTablero);
      
      $(".tablero-grid").append(stringHtmlTablero);
      for (let i = 0; i < tablero.length; i++) {
            for (let j = 0; j < tablero[i].length; j++) {
                  if(tablero[i][j]=="snake"){
                        $(`.fila:nth-child(${i+1})>div:nth-child(${j+1})`).empty()
                        $(`.fila:nth-child(${i+1})>div:nth-child(${j+1})`).append("<div class='snake'>snake</div>");
                  }
                  if (tablero[i][j]=="manzana") {
                        $(`.fila:nth-child(${i+1})>div:nth-child(${j+1})`).empty()
                        $(`.fila:nth-child(${i+1})>div:nth-child(${j+1})`).append("<div class='manzana'>manzana</div>");
                  }
            }
            
      }

}


let tba = posicionManzana(crearTablero(10));
//Crear un objeto serpiente con {Dirrecion, largo, vivo}
let serpiente ={
      dirreccion:"",
      largo:1,
      vivo:true
}


//Jquery
$(document).ready(function () {
      let entradaDireccion="w";
      setInterval(
            function(){
                  tba=moverSnake(tba,entradaDireccion);
                  pintarTablero(tba);
            },750
      )

      $("body").keyup(function (e) { 

            console.log(e.key);
            entradaDireccion = e.key.toLowerCase();
            //moverSnake(tba,entradaDireccion); //Si dejamos esta funcion la serpiente se movera cada que presionemos una entrada valida
            pintarTablero(tba);
             //console.log($(".tablero-grid").html());   
 
      });
});