/* Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en
caso de contestar sí, responder “Ciertamente”, en caso de contestar no,
responder: “No te creo”.

 */

let respuesta = '';
while (respuesta !== 'si' && respuesta !== 'no') {
  respuesta = prompt('¿Eres bellisimo?, si o no').toLowerCase();
}

if (respuesta === 'si') {
  alert('Ciertamente');
} else {
  alert('No te creo');
}

