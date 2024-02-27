console.log('it works');


//inserisco tutto dentro una funziona
function palindromeCheck(userWord) {
    
    //la reverso tramite reverse string e la salvo in una variabile
    let reversedWord= userWord.split("").reverse().join("");
    
    //SE parola dell utente è uguale a parola invertita stampo Palindroma
    if (reversedWord==userWord) {
        alert('La tua parola è Palindroma')
        
    }
    //Altrimenti stampo non palindroma
    else{
        alert('La tua parola non è Palindroma')
    }
    
    return reversedWord
    
}

// chiedo all utente una parola e la salvo dentro una variabile
let userWord=palindromeCheck(prompt('Inserisci qui la tua parola'))
