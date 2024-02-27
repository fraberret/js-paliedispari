console.log('it works');


function palindromeCheck(userWord) {

    //la reverso tramite reverse string e la salvo in una variabile
    let reversedWord = userWord.split("").reverse().join("");

    document.getElementById('results').innerHTML=`Scritta al contrario è: ${reversedWord}`

    //SE parola dell utente è uguale a parola invertita stampo Palindroma
    if (reversedWord == userWord) {
        alert('La tua parola è Palindroma')

    }
    //Altrimenti stampo non palindroma
    else {
        alert('La tua parola non è Palindroma')
    }

    return reversedWord

}




document.getElementById('send_button').addEventListener('click', function (e) {
    e.preventDefault
    let inputElement = document.getElementById('user_word').value
    console.log(inputElement);
    console.log(palindromeCheck(inputElement));
    
})

//inserisco tutto dentro una funziona

// chiedo all utente una parola e la salvo dentro una variabile

