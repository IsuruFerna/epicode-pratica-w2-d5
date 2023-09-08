/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

const animal = function (arr) {
   for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]);
   }
};

animal(pets);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log("ordine alfabaticamente: ", pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

// let len = pets.length - 1;

// do {
//    console.log(pets[len]);
//    len--;
// } while (len !== -1);

pets.reverse();
console.log("array order invertito: ", pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const first = pets[0];
pets.shift();
pets.push(first);

console.log("new order: ", pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
   {
      brand: "Ford",
      model: "Fiesta",
      color: "red",
      trims: ["titanium", "st", "active"],
   },
   {
      brand: "Peugeot",
      model: "208",
      color: "blue",
      trims: ["allure", "GT"],
   },
   {
      brand: "Volkswagen",
      model: "Polo",
      color: "black",
      trims: ["life", "style", "r-line"],
   },
];

cars[0].licensePlate = "12345a";
cars[1].licensePlate = "23456b";
cars[2].licensePlate = "34567c";
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {
   brand: "Alfa Romeo",
   model: "Giula",
   color: "red",
   trims: ["sprint", "Ti", "Veloce", "Quadrifoglio"],
   licensePlate: "45678d",
};
cars.push(newCar);

for (let i = 0; i < cars.length; i++) {
   cars[i].trims.pop();
}

console.log("ES 6: ", cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
let trim = "";

for (let i = 0; i < cars.length; i++) {
   trim = cars[i].trims[0];
   justTrims.push(trim);
}

console.log("justTrims: ", justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++) {
   if (cars[i].color.slice(0, 1) === "b") {
      console.log("Fizz");
   } else {
      console.log("Buzz");
   }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
   6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let j = 0;

while (numericArray[j] !== 32) {
   console.log(numericArray[j]);
   j++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const numArray = [];

for (let i = 0; i < charactersArray.length; i++) {
   let num;
   switch (charactersArray[i].trim()) {
      case "a":
         num = 1;
         break;

      case "b":
         num = 2;
         break;

      case "c":
         num = 3;
         break;

      case "d":
         num = 4;
         break;

      case "e":
         num = 5;
         break;

      case "f":
         num = 6;
         break;

      case "g":
         num = 7;
         break;

      case "h":
         num = 8;
         break;

      case "i":
         num = 9;
         break;

      case "l":
         num = 10;
         break;

      case "m":
         num = 11;
         break;

      case "n":
         num = 12;
         break;

      case "o":
         num = 13;
         break;

      case "p":
         num = 14;
         break;

      case "q":
         num = 15;
         break;

      case "r":
         num = 16;
         break;

      case "s":
         num = 17;
         break;

      case "t":
         num = 18;
         break;

      case "u":
         num = 19;
         break;

      case "v":
         num = 20;
         break;

      case "z":
         num = 21;
         break;

      default:
         num = null;
   }

   numArray.push(num);
}

console.log(charactersArray);
console.log(numArray);
