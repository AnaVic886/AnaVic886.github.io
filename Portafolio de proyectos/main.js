var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr.')
    .pauseFor(2500)
    .deleteAll()
    .typeString('¡Se lo que quieras ser!')
    .pauseFor(2500)
    .deleteChars(4)
    // numeros de caracteres que se borraran 
    .typeString('<strong>Programar!</strong>')
    .pauseFor(2500)
    .start();