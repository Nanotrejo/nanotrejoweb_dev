// Script para enviar el formulario a la empresa
console.log('hola')
var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log('me diste un click');

  var datos = new FormData(formulario);

  console.log(datos.get('nombre'));
  console.log(datos.get('asunto'));

  fetch('php/post.php',{
    mode: 'no-cors',
    method: 'POST',
    body: datos
  })

  .then(respuesta => respuesta.text())
  .then(data => {
      console.log('Recibo algo');
      console.log(data)
  })

})

//                 <input class="btn btn-primary" type="submit" name="" value="Enviar mensaje">
//<button class="btn btn-primary" type="submit" name=""> Enviar Mensaje</button>
