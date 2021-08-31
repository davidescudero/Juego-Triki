function init(){

	// asignamso en variable el input indicador del turno
	var inputTurno = document.getElementById('InputTurno');

	document.getElementById("boton_sorteo").style.display = "block";
	document.getElementById("InputTurno").style.display = "none";
	document.getElementById("label_turno").style.display = "none";
	document.getElementById("contenedor_tabla").style.display = "none";
	
	
	
	
	boton_sorteo.onclick = function(e){
		var jugador = Math.floor(Math.random() * 2) + 1;
		if (jugador == 1) {
			alert("Comienza Jugador 1");
			inputTurno.value = "Jugador 1";
		}else{
			alert("Comienza Jugador 2");
			inputTurno.value = "Jugador 2";
		}

		document.getElementById("InputTurno").style.display = "block";
		document.getElementById("label_turno").style.display = "block";
		document.getElementById("contenedor_tabla").style.display = "block";
		this.style.display = "none";
	}	

	boton1.onclick = function(e){

		if (boton1.value == '_') {
			if (inputTurno.value == "Jugador 1") {
				boton1.value = 'O';
				inputTurno.value = "Jugador 2";
			}else{
				boton1.value = 'X';
				inputTurno.value = "Jugador 1";
			}
			validar();

		}
		
		
	}

	boton2.onclick = function(e){
		if (boton2.value == '_') {
			if (inputTurno.value == "Jugador 1") {
				boton2.value = 'O';
				inputTurno.value = "Jugador 2";
			}else{
				boton2.value = 'X';
				inputTurno.value = "Jugador 1";
			}
			validar();
		}
		
	}
	boton3.onclick = function(e){
		if (boton3.value == '_') {
			if (inputTurno.value == "Jugador 1") {
				boton3.value = 'O';
				inputTurno.value = "Jugador 2";
			}else{
				boton3.value = 'X';
				inputTurno.value = "Jugador 1";
			}
			validar();
		}
		
	}

	boton4.onclick = function(e){
		if (boton4.value == '_') {
			if (inputTurno.value == "Jugador 1") {
				boton4.value = 'O';
				inputTurno.value = "Jugador 2";
			}else{
				boton4.value = 'X';
				inputTurno.value = "Jugador 1";
			}
			validar();
		}
		
	}

	boton5.onclick = function(e){
		if (boton5.value == '_') {
			if (inputTurno.value == "Jugador 1") {
				boton5.value = 'O';
				inputTurno.value = "Jugador 2";
			}else{
				boton5.value = 'X';
				inputTurno.value = "Jugador 1";
			}
			validar();
		}
		
	}

	boton6.onclick = function(e){
		if (boton6.value == '_') {
			if (inputTurno.value == "Jugador 1") {
				boton6.value = 'O';
				inputTurno.value = "Jugador 2";
			}else{
				boton6.value = 'X';
				inputTurno.value = "Jugador 1";
			}
			validar();
		}
		
	}

	boton7.onclick = function(e){
		if (boton7.value == '_') {
			if (inputTurno.value == "Jugador 1") {
				boton7.value = 'O';
				inputTurno.value = "Jugador 2";
			}else{
				boton7.value = 'X';
				inputTurno.value = "Jugador 1";
			}
			validar();
		}
		
	}

	boton8.onclick = function(e){
		if (boton8.value == '_') {
			if (inputTurno.value == "Jugador 1") {
				boton8.value = 'O';
				inputTurno.value = "Jugador 2";
			}else{
				boton8.value = 'X';
				inputTurno.value = "Jugador 1";
			}
			validar();
		}
		
	}

	boton9.onclick = function(e){
		if (boton9.value == '_') {
			if (inputTurno.value == "Jugador 1") {
				boton9.value = 'O';
				inputTurno.value = "Jugador 2";
			}else{
				boton9.value = 'X';
				inputTurno.value = "Jugador 1";
			}
			validar();
		}
		
	}

}	

function validar(){

	//validamos la primera fila
	if (boton1.value == 'X' && boton2.value == 'X' && boton3.value == 'X') {
		document.getElementById("InputTurno").style.display = "none";
		boton1.style.backgroundColor = ' #7dcea0';
		boton2.style.backgroundColor = ' #7dcea0';
		boton3.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 2");
		setTimeout(function(){
		    limpiar();
		},4000);
		

	}else if (boton1.value == 'O' && boton2.value == 'O' && boton3.value == 'O') {
		document.getElementById("InputTurno").style.display = "none";
		boton1.style.backgroundColor = ' #7dcea0';
		boton2.style.backgroundColor = ' #7dcea0';
		boton3.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 1");
		setTimeout(function(){
		    limpiar();
		},4000);
	}

	//validamos la segunda fila
	if (boton4.value == 'X' && boton5.value == 'X' && boton6.value == 'X') {
		document.getElementById("InputTurno").style.display = "none";
		boton4.style.backgroundColor = ' #7dcea0';
		boton5.style.backgroundColor = ' #7dcea0';
		boton6.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 2");
		setTimeout(function(){
		    limpiar();
		},4000);
	}else if (boton4.value == 'O' && boton5.value == 'O' && boton6.value == 'O') {
		document.getElementById("InputTurno").style.display = "none";
		boton4.style.backgroundColor = ' #7dcea0';
		boton5.style.backgroundColor = ' #7dcea0';
		boton6.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 1");
		setTimeout(function(){
		    limpiar();
		},4000);
	}

	//validamos la tercer fila
	if (boton7.value == 'X' && boton8.value == 'X' && boton9.value == 'X') {
		document.getElementById("InputTurno").style.display = "none";
		boton7.style.backgroundColor = ' #7dcea0';
		boton8.style.backgroundColor = ' #7dcea0';
		boton9.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 2");
		setTimeout(function(){
		    limpiar();
		},4000);
	}else if (boton7.value == 'O' && boton8.value == 'O' && boton9.value == 'O') {
		document.getElementById("InputTurno").style.display = "none";
		boton7.style.backgroundColor = ' #7dcea0';
		boton8.style.backgroundColor = ' #7dcea0';
		boton9.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 1");
		setTimeout(function(){
		    limpiar();
		},4000);
	}

	//validamos la primer columna
	if (boton1.value == 'X' && boton4.value == 'X' && boton7.value == 'X') {
		document.getElementById("InputTurno").style.display = "none";
		boton1.style.backgroundColor = ' #7dcea0';
		boton4.style.backgroundColor = ' #7dcea0';
		boton7.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 2");
		setTimeout(function(){
		    limpiar();
		},4000);
	}else if (boton1.value == 'O' && boton4.value == 'O' && boton7.value == 'O') {
		document.getElementById("InputTurno").style.display = "none";
		boton1.style.backgroundColor = ' #7dcea0';
		boton4.style.backgroundColor = ' #7dcea0';
		boton7.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 1");
		setTimeout(function(){
		    limpiar();
		},4000);
	}
    
	//validamos la segunda columna
	if (boton2.value == 'X' && boton5.value == 'X' && boton8.value == 'X') {
		document.getElementById("InputTurno").style.display = "none";
		boton2.style.backgroundColor = ' #7dcea0';
		boton5.style.backgroundColor = ' #7dcea0';
		boton8.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 2");
		setTimeout(function(){
		    limpiar();
		},4000);
	}else if (boton2.value == 'O' && boton5.value == 'O' && boton8.value == 'O') {
		document.getElementById("InputTurno").style.display = "none";
		boton2.style.backgroundColor = ' #7dcea0';
		boton5.style.backgroundColor = ' #7dcea0';
		boton8.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 1");
		setTimeout(function(){
		    limpiar();
		},4000);
	}   

	//validamos la tercer columna
	if (boton3.value == 'X' && boton6.value == 'X' && boton9.value == 'X') {
		document.getElementById("InputTurno").style.display = "none";
		boton3.style.backgroundColor = ' #7dcea0';
		boton6.style.backgroundColor = ' #7dcea0';
		boton9.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 2");
		setTimeout(function(){
		    limpiar();
		},4000);
	}else if (boton3.value == 'O' && boton6.value == 'O' && boton9.value == 'O') {
		document.getElementById("InputTurno").style.display = "none";
		boton3.style.backgroundColor = ' #7dcea0';
		boton6.style.backgroundColor = ' #7dcea0';
		boton9.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 1");
		setTimeout(function(){
		    limpiar();
		},4000);
	}

	//validamos la diagonal 1
	if (boton1.value == 'X' && boton5.value == 'X' && boton9.value == 'X') {
		document.getElementById("InputTurno").style.display = "none";
		boton1.style.backgroundColor = ' #7dcea0';
		boton5.style.backgroundColor = ' #7dcea0';
		boton9.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 2");
		setTimeout(function(){
		    limpiar();
		},4000);
	}else if (boton1.value == 'O' && boton5.value == 'O' && boton9.value == 'O') {
		document.getElementById("InputTurno").style.display = "none";
		boton1.style.backgroundColor = ' #7dcea0';
		boton5.style.backgroundColor = ' #7dcea0';
		boton9.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 1");
		setTimeout(function(){
		    limpiar();
		},4000);
	}

	//validamos la diagonal 2
	if (boton3.value == 'X' && boton5.value == 'X' && boton7.value == 'X') {
		document.getElementById("InputTurno").style.display = "none";
		boton3.style.backgroundColor = ' #7dcea0';
		boton5.style.backgroundColor = ' #7dcea0';
		boton7.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 2");
		setTimeout(function(){
		    limpiar();
		},4000);
	}else if (boton3.value == 'O' && boton5.value == 'O' && boton7.value == 'O') {
		document.getElementById("InputTurno").style.display = "none";
		boton3.style.backgroundColor = ' #7dcea0';
		boton5.style.backgroundColor = ' #7dcea0';
		boton7.style.backgroundColor = ' #7dcea0';
		alert("Gana Jugador 1");
		setTimeout(function(){
		    limpiar();
		},4000);
	}
    
}

function limpiar(){
    location.reload();
}