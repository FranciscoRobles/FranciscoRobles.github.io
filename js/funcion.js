function correr(){
    var par=document.getElementById("casa");
    par.innerHTML="contenido";
    par.setAttribute("class","azul");
    console.log(par);
}
function imagen(){
   miimagen.setAttribute("src","http://i.ytimg.com/vi/2DFtlNGzMIA/maxresdefault.jpg");
}
var miimagen=document.getElementById("SKT");
var miboton=document.getElementById("bot");
miboton.onclick=correr;
miimagen.onclick=imagen;