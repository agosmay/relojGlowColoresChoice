const tiempo = setInterval(()=> {
 let reloj = document.getElementById('reloj')
 let tiempoActual = new Date() 
 let horas = tiempoActual.getHours()
 let minutos = tiempoActual.getMinutes()
 let segundos = tiempoActual.getSeconds()
 
 if(minutos < 10) {
	 minutos = "0" + minutos;
 }
 
 if (horas < 10) {
	 horas = "0" + horas;
 }
 
 if (segundos < 10) {
	 segundos = "0" + segundos;
 }
 
reloj.textContent = `${horas} : ${minutos} : ${segundos}`
	
},1000) //se ejecuta cada un segundo


const botonAzul = document.getElementById('botonAzul')
const titulo = document.getElementById('titulo')
const botonVerde = document.getElementById('botonVerde')
const botonAmarillo = document.getElementById('botonAmarillo')
const botonRosa = document.getElementById('botonRosa')
const botonRojo = document.getElementById('botonRojo')
const botonBlanco = document.getElementById('botonBlanco')


botonBlanco.addEventListener('click', ()=> {
	reloj.classList.remove('glow', 'verde', 'amarillo', 'rojo', 'rosa', 'change')
	titulo.classList.remove('titulo', 'tituloVerde', 'tituloAmarillo', 'tituloRojo', 'tituloRosa', 'tituloAzul')	
	reloj.classList.add('blanco')
	titulo.classList.add('tituloBlanco')
	
	
})

botonAzul.addEventListener('click', ()=> {
	reloj.classList.remove('glow', 'verde', 'amarillo', 'rojo', 'rosa', 'blanco')
	titulo.classList.remove('titulo', 'tituloVerde', 'tituloAmarillo', 'tituloRojo', 'tituloRosa', 'tituloBlanco')	
	reloj.classList.add('change')
	titulo.classList.add('tituloAzul')
		
})

botonRosa.addEventListener('click', ()=> {
	reloj.classList.remove( 'verde', 'change', 'amarillo', 'rojo', 'glow', 'blanco')
	titulo.classList.remove('tituloVerde', 'tituloAzul', 'tituloAmarillo', 'tituloRojo', 'titulo', 'tituloBlanco')	
	reloj.classList.add('rosa')
	titulo.classList.add('tituloRosa')	
})

botonAmarillo.addEventListener('click', ()=> {
	reloj.classList.remove( 'verde', 'change', 'glow', 'rojo', 'rosa', 'blanco')
	titulo.classList.remove('tituloVerde', 'tituloAzul', 'titulo', 'tituloRojo', 'tituloRosa' , 'tituloBlanco')	
	reloj.classList.add('amarillo')
	titulo.classList.add('tituloAmarillo')	
})

botonVerde.addEventListener('click', ()=> {
	reloj.classList.remove( 'amarillo', 'change', 'glow', 'rojo', 'rosa', 'blanco')
	titulo.classList.remove('tituloAmarillo', 'tituloAzul', 'titulo', 'tituloRojo', 'tituloRosa', 'tituloBlanco')	
	reloj.classList.add('verde')
	titulo.classList.add('tituloVerde')	
	
	
})

botonRojo.addEventListener('click', ()=> {
	reloj.classList.remove('amarillo', 'change', 'glow', 'verde','rosa', 'blanco')
	titulo.classList.remove('tituloAmarillo', 'tituloAzul', 'titulo', 'tituloVerde', 'tituloRosa', 'tituloBlanco')	
	reloj.classList.add('rojo')
	titulo.classList.add('tituloRojo')	
	
	
})









/*botonAzul.addEventListener('click', ()=> {
	reloj.classList.add('change')
	titulo.classList.add('tituloAzul')	
})

botonVerde.addEventListener('click', ()=> {
	reloj.classList.add('verde')
	titulo.classList.add('tituloVerde')	
	
})

botonAmarillo.addEventListener('click', ()=> {
	reloj.classList.add('amarillo')
	titulo.classList.add('tituloAmarillo')	
	
	
})*/