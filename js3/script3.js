var nombre=prompt("¿Cual es tu nombre?");
alert("Hola"+nombre);
var edad=Number(prompt("Tu edad"));
if (edad<16) {
    alert("No puedes trabajar");
} else {
    var salario=Number(prompt("Tu salario"));
    if (edad>=16 && edad<=18) {
        document.write("Tu salario es"+salario);
    }else if(edad>19&&edad<=50){
        var comision=salario*0.05;
        document.write("Tu salario es "+(salario+comision));
    }else if(edad>51&&edad<=61){
        var comision=salario*0.10;
        document.write("Tu salario es"+(salario+comision));
    }else if(edad>60){
        var comision=salario*0.15;
        document.write("Tu salario es"+(salario+comision));
    }


    
}