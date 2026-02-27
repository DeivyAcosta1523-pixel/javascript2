// Preguntamos cuántos pesos quiere convertir
let pesos = prompt("¿Cuántos pesos colombianos quieres convertir?")
// Convertimos el texto a número
let cantidadPesos = Number(pesos)
// Dividimos entre 4000 porque 1 dólar = 4000 pesos (tasa fija)
let dolares = cantidadPesos / 4000
// Mostramos el resultado
alert(pesos + " pesos = " + dolares + " dólares")