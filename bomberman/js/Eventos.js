
var ManejadorDeEventos = function() {
	
	
	this.teclasValidas
	
	 var personajes=new Array();
	
	this.agregar=function agregarPersonaje(personaje){
			personajes.push(personaje);
	}
	
	document.onkeydown=function(e){
		if(window.event) e=window.event;
		var keycode=(e.keyCode)?e.keyCode:e.which;
		
		for (i = 0; i < personajes.length; i++){
			personajes[i].reaccionar(keycode);			
		}
		
		return 0;
	};	
};
