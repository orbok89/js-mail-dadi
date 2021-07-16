var lista = ['a', 'b','c'];
var controllo= prompt('parola');
var flag = false;
for (var i = 0; i < lista.length; i++){
    if (controllo == lista[i]){
        flag = true;
    }


}
if(flag == true){
    alert('accesso');
}
else{
    alert('negato')
}



