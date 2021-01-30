// /* const message = "Hola Mundo!";
// console.log(message); */

// let message:string = "Hola Mundo!";
// // message = 5 <-- No se puede porque no es el mismo type
// console.log(message);

// function esValido():boolean {
//     return true;
// }

// const numeros:number[] = [1,2,3,4,5,6,7890];
// const nombres:Array<string> = ["Juan", "Pedro"];

// let comodin:string|number|boolean = "hola"; // Union de tipos de datos
// comodin = 5;
// comodin = true;


// interface Persona {
//     nombre:string;
//     edad:number;
//     nss?:number; // Valor Opcional denotado por '?'
// }

// let yo:Persona = {
//     nombre: "Francisco",
//     edad: 100,
// }


// type Calificacion = number; // Alias, da mas contexto acerca del tipo de dato que se esta usando

// const calificacion:Calificacion = 10;

// class PersonaClass {}

// function esPersona(obj:any):boolean {
//     //return obj instanceof PersonaClass;
//     return typeof obj === 'string'; //
// }

// esPersona(yo)

// interface Usuarios {
//     nombre: string;
//     correo: string;
//     edad: number;
// }

// const users:Usuarios[] = [{
//     "nombre": "Juan",
//     "correo": "juan@algo",
//     "edad": 30
// },
// {
//     "nombre": "Ana",
//     "correo": "ana@algo",
//     "edad": 28
// }
// ]


interface Persona {
    nombre:string;
    correo:string;
    expediente:number;
}

class PersonaClass implements Persona{

    nombre;
    correo;
    expediente;

    constructor (n:string, c:string, e:number) {
        this.nombre = n;
        this.correo = c;
        this.expediente = e;
    }

}

class Profesor extends PersonaClass {
    calificar():number {
        return 100; // de 10
    }
}

class Estudiante extends PersonaClass {
    estudiar():boolean {
        return true; // de seh o neh
    }
}

let elProfe:Profesor = new Profesor("Nombre Apellido", "algo@aqui.com", 123456);
let alumno:Estudiante = new Estudiante("Nombre Apellido", "algo@aqui.com", 123456);

function esProfesor(p:any):boolean {
    return p instanceof Profesor;
}

function esAlumno(a:any):boolean {
    return a instanceof Estudiante;
}


console.log(alumno.estudiar());
console.log(elProfe.calificar());

console.log(esProfesor(elProfe)); // true
console.log(esProfesor(alumno)); // false
console.log(esAlumno(elProfe)); // false
console.log(esAlumno(alumno)); // true

