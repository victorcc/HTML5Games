// CONSTANTES
DIR_IMG = "images/";
LARGO = "600";
ALTO = "400";
POSX_INICIAL = Math.round(LARGO/2) - 15;
POSY_INICIAL = ALTO - 15;
JUEGO_FPS = 50;
var micanvas;
var contexto;

/*
 * tendremos una clase que controlara las posiciones
 * dentro de nuestro sprite de imagenes
 * 
 * */
function Posicion(xi,yi,xf,yf){
	this.xIni=xi;
	this.yIni=yi;
	this.xFin=xf;
	this.yFin=yf;
}


function limpiar () {
	micanvas.width = micanvas.width;
}

var Juego = function() {
	
	var posicionInicial=new Posicion(0,62,30,30);
	var bomberman = new Personaje();
	bomberman.setPosicion(posicionInicial);
	var manejadornave = new ManejadorDeEventos();
	manejadornave.agregar(bomberman);	
	
	this.correrJuego = function() {
		limpiar();
		bomberman.dibujar();
	};	
	setInterval(this.correrJuego, 1000 / JUEGO_FPS);
	
};

window.onload = function() {
	micanvas = document.getElementById("espacio");
	contexto = micanvas.getContext("2d");	
    var juego = new Juego();
};
