function mensaje(){
    alert("Cargando reporte del clima");
}
setTimeout(mensaje, 10);

let osorno=document.getElementById("clickosorno")
osorno.addEventListener("click", function(){
    document.getElementById("Osorno").style.display="block";
    document.getElementById("Riobueno").style.display="none";
    document.getElementById("Entrelagos").style.display="none";
    document.getElementById("Launion").style.display="none";
    document.getElementById("Puertomontt").style.display="none";
});
let Riobueno=document.getElementById("clickriobueno")
Riobueno.addEventListener("click", function(){
    document.getElementById("Osorno").style.display="none";
    document.getElementById("Riobueno").style.display="block";
    document.getElementById("Entrelagos").style.display="none";
    document.getElementById("Launion").style.display="none";
    document.getElementById("Puertomontt").style.display="none";
});
let Entrelagos=document.getElementById("clickentrelagos")
Entrelagos.addEventListener("click", function(){
    document.getElementById("Osorno").style.display="none";
    document.getElementById("Riobueno").style.display="none";
    document.getElementById("Entrelagos").style.display="block";
    document.getElementById("Launion").style.display="none";
    document.getElementById("Puertomontt").style.display="none";
});
let Launion=document.getElementById("clicklaunion")
Launion.addEventListener("click", function(){
    document.getElementById("Osorno").style.display="none";
    document.getElementById("Riobueno").style.display="none";
    document.getElementById("Entrelagos").style.display="none";
    document.getElementById("Launion").style.display="block";
    document.getElementById("Puertomontt").style.display="none";
});
let Puertomontt=document.getElementById("clickpuertomontt")
Puertomontt.addEventListener("click", function(){
    document.getElementById("Osorno").style.display="none";
    document.getElementById("Riobueno").style.display="none";
    document.getElementById("Entrelagos").style.display="none";
    document.getElementById("Launion").style.display="none";
    document.getElementById("Puertomontt").style.display="block";
});

let boton = document.getElementById("boton_cookies")

boton.addEventListener("click", function(){
    document.getElementById("footer").remove();
});

