'use strict';


function wyswietlDane(e) {
    e.preventDefault();
    let imieTo = document.getElementById('imie').value;
    let nazwiskoTo = document.getElementById('nazwisko').value;
    let telefonTen = document.getElementById('tel').value;
    
    document.getElementById('name').innerText= imieTo;
    document.getElementById('surname').innerText= nazwiskoTo;
    document.getElementById('phone').innerText = telefonTen;

    
    
    console.log('kdk');
}

let btn = document.getElementById("btn");
btn.addEventListener("click", wyswietlDane);
