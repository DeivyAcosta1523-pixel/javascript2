// Pedimos al usuario que escriba 3 notas (sale una ventanita para escribir)
let nota1 = prompt("Escribe la primera nota:")
let nota2 = prompt("Escribe la segunda nota:")
let nota3 = prompt("Escribe la tercera nota:")
// Convertimos el texto que escribió el usuario a número
// (porque prompt siempre devuelve texto/string)
let n1 = Number(nota1)
let n2 = Number(nota2)
let n3 = Number(nota3)
// Sumamos las tres notas y dividimos entre 3 para sacar el promedio
let promedio = (n1 + n2 + n3) / 3
// Mostramos el resultado en una ventanita
alert("El promedio es: " + promedio)