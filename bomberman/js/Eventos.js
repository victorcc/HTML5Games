
var ManejadorDeEventos = function(nave) {
	this.nave = nave;
	
	document.onkeydown=function(e){
		if(window.event) e=window.event;
		var keycode=(e.keyCode)?e.keyCode:e.which;

		switch(keycode){	
		    
		    case 37:
				nave.correrIzquierda();
				nave.animar(93);				
		    break;
		    
			case 39:
				nave.correrDerecha();
				nave.animar(33);				
		    break;	
		    
			case 40:
				nave.correrAbajo();
				nave.animar(63);				
		    break;	
		    
			case 38:
				nave.correrArriba();
				nave.animar(0);				
		    break;	
		}
		
		return 0;
	};	
};
