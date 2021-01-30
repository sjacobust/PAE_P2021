// /* const message = "Hola Mundo!";
// console.log(message); */
class PersonaClass {
    constructor(n, c, e) {
        this.nombre = n;
        this.correo = c;
        this.expediente = e;
    }
}
class Profesor extends PersonaClass {
    calificar() {
        return 100; // de 10
    }
}
class Estudiante extends PersonaClass {
    estudiar() {
        return true; // de seh o neh
    }
}
let elProfe = new Profesor("Nombre Apellido", "algo@aqui.com", 123456);
let alumno = new Estudiante("Nombre Apellido", "algo@aqui.com", 123456);
function esProfesor(p) {
    return p instanceof Profesor;
}
function esAlumno(a) {
    return a instanceof Estudiante;
}
console.log(alumno.estudiar());
console.log(elProfe.calificar());
console.log(esProfesor(elProfe)); // true
console.log(esProfesor(alumno)); // false
console.log(esAlumno(elProfe)); // false
console.log(esAlumno(alumno)); // true
