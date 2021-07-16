var lista = ['a@mail.com', 'b@mail.com','c@mail.com'];
var controllo= prompt('Inserisi mail');
var flag = false;
for (var i = 0; i < lista.length; i++){
    if (controllo == lista[i]){
        flag = true;
        alert('accesso')
    }
}
if(flag == false){
    alert('negato');
}



