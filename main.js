//console.log("Hola Mundo! desde la consola");
var app = document.getElementById('app');

var typerwriter = new Typewriter(app, {
    loop: true
});

typerwriter.typeString('Desarrolladora Fronted Jr|Analista de ciberseguridad Jr')
.pauseFor(2500)
.deleteAll()
.typeString('¡Si lo puedes imaginar, lo puedes crear!')
.pauseFor(2500)
.deleteChars(6)
.typeString('<strong>programar!</strong>')
.pauseFor(2500)
.start();