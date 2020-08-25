// Script para enviar el formulario a la empresa
console.log('hola')
var formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();
  //console.log('me diste un click');

  var datos = new FormData(formulario);

  console.log(datos.get('nombre'));
  console.log(datos.get('asunto'));

  enviaForm(datos);

  fetch('php/post.php',{
    //mode: 'no-cors',
    method: 'POST',
    body: datos
  })

  .then(respuesta => respuesta.json())
  .then(data => {
      console.log('Recibo algo');
      console.log(data)
  })

})

function enviaForm() {
var formulario = document.getElementById('formulario');
var datos = new FormData(formulario);

  Email.send({
    Host:"smtp.gmail.com",
    Username : "pesadilladac@gmail.com",
    Password: "administracion2019",
    To: "Username",
    From: datos.get('email'),
    Subject: datos.get('asunto'),
    Body: datos.get('mensaje'),
  }).then(
  alert("Mensaje enviado")
);
}

//                 <input class="btn btn-primary" type="submit" name="" value="Enviar mensaje">
//<button class="btn btn-primary" type="submit" name=""> Enviar Mensaje</button>
