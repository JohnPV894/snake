 "use strict";

//Funciones
//Crear una matriz: La funcion debe recibir la longitud de esta como parametro 
      //Colocar la serpiente(Un @string que diga "snake") en su pocision inicial 
function crearTablero(longitud) {
      let tablero=[];
      for(let i=0 ; i<longitud ; i++){
            tablero[i]=Array(longitud);
      }
      tablero[4][4]="snake"

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
function moverSnake(tablero,serpiente){

      console.log("Ejecuanto moverSnake")
      //console.log(serpiente);
      
      let ejeY;
      let ejeX;

      //La funcion indexOf devuelve -1 siempre que no encuentra el elemento que busca
      for (let i = 0; i < tablero.length; i++) {
            if(tablero[i].indexOf("snake")!=-1){
                  ejeY = i;
                  ejeX = tablero[i].indexOf("snake");
                  //console.log(ejeX+" "+ejeY+" EJEX Y EJEY");    
                  tablero[ejeY][ejeX]=undefined;
            }
      }

      switch (serpiente.dirreccion) {
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
      if (ejeY == undefined || ejeX == undefined || ejeY < 0 || ejeX < 0  ) {
            serpiente.vivo=false;
            console.log("Chocaste Y perdista la partida");
            //return [tablero,serpiente];
      }

      else if(tablero[ejeY][ejeX]=="manzana") {
            serpiente.largo=serpiente.largo+1;
            tablero=posicionManzana(tablero);

            console.log("manzana comida");
            
      }


      tablero[ejeY][ejeX]="snake";

      
      return {tablero,serpiente};
}

//Recibe una matriz OJO la matriz @[[]] debe ya tener posicionada la manzana y la snake
//vacia el contenedor html <"tablero-grid">
//recorre la matriz y pinta los correspondientes elementos
function pintarTablero(tablero) {
      $(".tablero-grid").empty();

      let stringHtmlTablero="";
      for (let ii = 0; ii < tablero.length; ii++) {
            //Para crear el Cuerpo html del tablero voy a incertar un div por cada fila
            stringHtmlTablero+=
            `<div class="fila">\n\t`;
            for (let i = 0; i < tablero[ii].length; i++) {
                  stringHtmlTablero+=`<div>${tablero[ii][i]}</div>`;
            }
            stringHtmlTablero+=
            `\n</div>`;
      }
      
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

//Crear un tablero y definir su tamaño 
let tba = posicionManzana(crearTablero(12));
//Crear un objeto serpiente con {Dirrecion, largo, vivo}
let serpiente ={
      dirreccion:"w",
      largo:1,
      vivo:true
}
//Mantener juego "Vivo"

//Jquery
$(document).ready(function () {
      pintarTablero(tba);

            let juego=setInterval(
                  function(){
                        let objetoContenedor=moverSnake(tba,serpiente);
                        tba=objetoContenedor.tablero;
                        serpiente=objetoContenedor.serpiente;
                        pintarTablero(tba);
                        console.log("obj:",objetoContenedor);
                  },750
            )
            if (serpiente.vivo==false) {
                  clearInterval(juego)
            }
      

      //setInterval(()=>clearInterval(juego),2000);
      $("body").keyup(function (e) { 

            
            console.log(e.key);
            serpiente.dirreccion = e.key.toLowerCase();
            //moverSnake(tba,entradaDireccion); //Si dejamos esta funcion la serpiente se movera cada que presionemos una entrada valida

 
 
      });
});