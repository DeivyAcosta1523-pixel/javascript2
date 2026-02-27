// Pedimos la temperatura en Celsius
let celsius = prompt("Escribe la temperatura en °C:")
// Convertimos el texto a número
let gradosC = Number(celsius)
// Fórmula de conversión: F = (C × 9/5) + 32
let fahrenheit = (gradosC * 9 / 5) + 32
// Mostramos el resultado
alert(gradosC + " °C son " + fahrenheit + " °F")