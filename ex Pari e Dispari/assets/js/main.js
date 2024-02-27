console.log('it works');

/*L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/






document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault

    let userNumber = document.getElementById('user_number').value

    let userChoose = document.getElementById('pariodispari').value

    console.log(userNumber, userChoose
    );
    function randomNumber() {

        return Math.floor(Math.random() * 5) + 1;

    }
    let pcNumber = randomNumber()
    console.log(pcNumber);

   
    function sum(num1, num2) {
        return Number(num1) + Number(num2)
    }

    console.log(sum(userNumber, pcNumber));

})



//let result= Number(userNumber) + pcNumber









//console.log(sum(pcNumber,userNumber));

