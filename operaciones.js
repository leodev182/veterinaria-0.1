const fs = require("fs");

function registrar(nombre, edad, tipo, color, enfermedad) {
  //  Se crea un nuevo objeto nuevaCita que contiene la información
  // de la cita proporcionada como parámetros a la función.
  const nuevaCita = {
    nombre,
    edad,
    tipo,
    color,
    enfermedad,
  };

  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  citas.push(nuevaCita);
  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2)); //El null se usa para indicar que no se está aplicando ningún filtro
  // el 2 se usa para especificar la cantidad de espacios de sangría que se deben usar en la cadena JSON resultante
  console.log("Cita registrada exitosamente.");
}

function leer() {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  console.log("Citas registradas:");
  citas.forEach((cita, index) => {
    console.log(`Cita ${index + 1}:`);
    console.log(cita);
  });
}

function borrarCita(indice) {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));
  if (indice >= 0 && indice < citas.length) {
    citas.splice(indice, 1); // Elimina la cita en el índice dado
    fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2));
    console.log("Cita eliminada exitosamente.");
  } else {
    console.log("Índice de cita inválido.");
  }
}

module.exports = {
  registrar,
  leer,
  borrarCita,
};
