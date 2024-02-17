const { registrar, leer, borrarCita } = require("./operaciones");

const instrucciones =
  "Hola, Bienvenido/a a nuestro sistema de registro veterinario Patitas. \nPor favor introduce la siguiente informacion en el mismo orden especificado: \n npm run registrar \n nombre de mascota: \n edad: \n tipo de mascota: \ncolor: \n síntomas: \n De preferencia, escribe tus respuestas entre comillas. \n Si desdeas leer tus citas registradas debes escribir el siguiente comando: npm run leer, \n si deseas borrar un registro escribre el siguiente comando: npm run borrar (número de registro).";

const operacion = process.argv[2];

if (operacion === "registrar") {
  // Código para registrar una nueva cita
  const [, , , nombre, edad, tipo, color, sintomas] = process.argv;
  registrar(nombre, edad, tipo, color, sintomas);
} else if (operacion === "leer") {
  leer();
} else if (operacion === "borrar") {
  const indice = parseInt(process.argv[3]);
  borrarCita(indice);
} else {
  console.log(instrucciones);
}
