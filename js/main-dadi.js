
var numMio = Math.floor(Math.random() * 6 + 1);
var numPc = Math.floor(Math.random() * 6 + 1);
console.log(numMio);
console.log(numPc);
if( numMio > numPc){
    alert('bravo campione hai vinto');
}
else if (numMio < numPc){
    alert('ma come? neanche contro il pc riesci a vincere?');
}
else{
    alert('pari e patta')
}
