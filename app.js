let nombre = prompt ("Ingrese nombre")
let Apeliido = prompt ("Ingrese apellido")

function saludar(nombre, Apellido) {
    console.log(`Saludos ${nombre} ${Apellido}`);}

    saludar(nombre, Apeliido);


let PaisDeOrigen = prompt ("Ingrese su pais de origen.");
alert("Que bellizimo lugar es" + " " + PaisDeOrigen + "!!!" + ";asi que te vas de vacaciones????, que maravilla!!!" )

 
let PaisDeDestibo = prompt (`Elija los destinos disponibles a la fercha: 
1 = Disney
2 = Qatar
3 = Brazil
4 = Mexico
`)
4
switch (PaisDeDestibo) {
    case "1":
        console.log ("Tu destino es Disney");
        break;

    case "2":
        console.log ("Tu destino es Qatar")
    break;

    case "3":
        console.log ("Tu destino es Brazil")
        break;

    case "4":
        console.log ("Tu destino es Mexico")
        break;

    default:
        console.log ("Ninguna de las anterirores")
        break;
}

let PesoDeValija1 = Number(prompt("Ingrese el peso de su valija numero 1"));
let PesoDeValija2 = Number(prompt("Ingrese el peso de su valija numero2"));
function suma(PesoDeValija1,PesoDeValija2 ) {
  return PesoDeValija2 + PesoDeValija1;
}
let resultado = suma(PesoDeValija1,PesoDeValija2);
console.log("Su peso total, en equipage es " + resultado + "Kg");

for (let i = 0; i <= 3; i++) {
  alert(`Espera el resultado a lasss: ${i}`);
}

const bebida = [
    { bebida: "Vino", precio: 800,  },
    { bebida: "Gaseosa", precio: 500 },
    { bebida: "Bodcka", precio: 3500 },
    { bebida: "Fernet", precio: 2500 },
    { bebida: "Agua", precio: 2500 },

  ];

  const comida = [
    {comida: "Asado", precio: 2500 , saludable: false},
    {comida: "Ravioles", precio: 1200, saludable: false},
    {comida: "Choripan", precio: 800, saludable: false},
    {comida: "Ensalada", precio: 650, saludable: true},
  ];
 
//cartilla//
 console.log(bebida)
 console.log(comida)
 //eleccion de menu//
 console.log(bebida[3]);
 console.log(comida[2]);
//modificacion de cartilla//
bebida.push("Limonada");
comida.push ("Camarones")
//filto por comida "Asado"//
let filtro = comida.filter((p) => {
    return p.comida === "Asado";
  });
  console.log(filtro);

