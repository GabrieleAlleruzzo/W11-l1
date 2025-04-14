// 1) Quali sono i tipi primitivi principali in TypeScript?
// stringa
// number
// any
// undefinded
// null
//2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
var myName = "Gabriele";
var myAge = 29;
//let idk: boolean = true || false;
var studyng = false || true;
//3) Tipizza il parametro della seguente funzione:
//const greet = (name) => { return "Ciao " + name }
var greet = function (name) {
    return "Ciao " + name;
};
console.log(greet(myName));
//4) Specifica il tipo di ritorno della seguente funzione:
var sum = function (a, b) {
    return a + b;
};
console.log(sum(2, 2));
//5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
var bigliettoAliscafo = function (num) {
    var IVA = 0.22;
    return num + num * IVA;
};
console.log(bigliettoAliscafo(6));
//6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
var conCatena = function (var1, var2) {
    //se assegno il tipo string mi sottolinea in rosso error
    var varSum = var1 + " " + var2;
    return varSum.length; //perché mi da errore su return?
};
console.log(conCatena("Hello", "meff"));
//questa cosa mi ha conuso
//7) Cos'è un Type Union e come si scrive?
function printId(id) {
    console.log("Your ID is: " + id);
}
printId("1996");
printId(1996);
//8) Crea una variabile che possa contenere un numero, null o undefined.
var zero = 0;
console.log(zero);
/*
//9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.
function weekDays(month: number, week: number , day: string): number| string => {
    return console.log(weekDays(3, 3, 'frayday'))
}


//10) Tipizza il seguente array di numeri:
const numbers: number[] = [1, 2, 3]; */
