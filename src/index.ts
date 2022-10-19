import "./styles.css";

//let sumaNum: number = 0;

/*
for (let index = 0; index < 10; index++) {
  let num: number = Number(prompt("Ingrese 10 nros"));
  sumaNum = sumaNum + num;
  //console.log(sumaNum);
}
console.log(sumaNum);
let promedio: number = sumaNum / 10;
console.log(promedio);
*/

let nota :number =0; 
let suma :number = 0; 
let promedio :number = 0;
let contador : number = 1;


while (contador<=10) {
nota= Number(prompt("Ingrese una nota: "));
suma = suma + nota;
contador = contador +1;
}
promedio = suma/10;
console.log("El promedio de las notas es: " + promedio);

}

