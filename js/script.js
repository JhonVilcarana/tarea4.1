var x=prompt("Numeros: ")

function factorial() {
    var total=1;
    for (i =1; i<=x; i++){
        total=total*i;
    }
    return total; 
}
    document.write("El factorial de :",x,"es",factorial());