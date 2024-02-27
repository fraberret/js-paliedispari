console.log('it works');

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/

//genera un numero random da 1 a 5
function randomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

//esegue la somma di due numeru
function sum(num1, num2) {
    return Number(num1) + Number(num2)
}

//controlla se un numero è pari o dispari
function oddOrEven(number) {
    if (number % 2 == 0) {
        return "Paro"

    } else {
        return "Disparo"
    }
}


document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault

    //numero scelto dall utente
    let userNumber = document.getElementById('user_number').value

    //l'utente sceglie se pari o dispari
    let userChoose = document.getElementById('pariodispari').value

    console.log(userNumber, userChoose
    );

    //numero del pc generato dalla funzione
    let pcNumber = randomNumber()
    console.log(pcNumber);

    //somma del numero dell utente e del pc svolta dalla funzione
    let finalNumber = sum(userNumber, pcNumber)

    //verifica se numero pari o dispari svolta dalla funzione
    let parioDispari = oddOrEven(finalNumber)
    //console.log(parioDispari)
    //console.log(userChoose)
    
    //SE la scelta dell utente è uguale al risultato della somma
    if (userChoose == parioDispari) {
        alert('Hai vinto!')
    

    } else {
        alert('Hai perso!')
    }



})












//console.log(sum(pcNumber,userNumber));

