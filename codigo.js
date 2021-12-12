var d = document.getElementById ("cuadrito");
var papel = d.getContext ("2d");
var estado = 0;             
var c = document.getElementById ("colorcito");
var t = document.getElementById ("tamañoLinea");
var boton = document.getElementById ("check");
var borrador = document.getElementById ("eraser");
var grosor = 2;

console.log (c.value);
var colorLinea = "#87cefa";
var x;                      
var y; 

function actualizarColor (event) {
  console.log('SE ACTUALIZO EL COLOR', event.target.value);
  colorLinea = event.target.value
}

function borrar (event) {
  console.log('SE ACTUALIZO EL COLOR', event.target.value);
  colorLinea = "#FFFFFF"
}

function actualizarGrosor (evento) {
  grosor = parseInt(t.value);
  console.log (evento)
}

document.addEventListener("mousedown",presionarMouse);  
document.addEventListener("mouseup",soltarMouse);      
document.addEventListener("mousemove",dibujarMouse);  
boton.addEventListener("click", actualizarGrosor);
borrador.addEventListener("click", borrar);         
c.addEventListener('input', actualizarColor)

dibujarLineas ("black",2,1,1,1,299);
dibujarLineas ("black",2,1,1,299,1);
dibujarLineas ("black",2,299,299,299,1);
dibujarLineas ("black",2,1,299,299,299);

function dibujarMouse(evento){
  if (estado == 1) {   
    dibujarLinea(colorLinea, grosor, x, y, evento.layerX, evento.layerY, papel);
  }
  x = evento.layerX;
  y = evento.layerY;
}


function presionarMouse(evento){
  estado = 1;          
  x = evento.layerX;
  y = evento.layerY;
  dibujarLineas("red", 3, evento.layerX + 1, evento.layerY + 1, evento.layerX - 1, evento.layerY - 1, papel);
  }



function soltarMouse(evento){
  estado = 0;         
  x = evento.layerX;
  y = evento.layerY;
}
function dibujarLinea(color, grosor, xinicial, yinicial, xfinal, yfinal){
    papel.beginPath();                  
    papel.strokeStyle = color;         
    papel.lineWidth = grosor;                
    papel.moveTo(xinicial, yinicial);   
    papel.lineTo(xfinal, yfinal);       
    papel.stroke();                     
    papel.closePath();
}

function dibujarLineas(color,tamaño, xinicial, yinicial, xfinal, yfinal){
    papel.beginPath();                  
    papel.strokeStyle = color;         
    papel.lineWidth = tamaño;                
    papel.moveTo(xinicial, yinicial);   
    papel.lineTo(xfinal, yfinal);       
    papel.stroke();                     
    papel.closePath();
}