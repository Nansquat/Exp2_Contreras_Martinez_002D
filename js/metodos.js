function EnviarContacto(){
    var genero="";
    var a=document.getElementById("nom").value;
    var b=document.getElementById("correo").value;
    var c=document.getElementById("fono").value;
    var d=document.getElementById("edad").value;
    var e=parseInt(document.getElementById("genero").value);

        if (f===1){
            genero='Mujer';
        }
        if (f===2){
            genero='Hombre';
        }
        if (f===3){
            genero='Otro Genero';
        }


    var mensaje = "Contacto Hespérides: \n"
                   +"Nombre: " + a + "\n" + "Correo: " + b + "\n"+
                   "Teléfono: " + c + "\n" + "Edad: " + d 
                   + "\n" + "Género: " + genero;
                   
    document.getElementById("textocontacto").value=mensaje;
}

//CALCULADORA IMC

$(document).ready(function(){
    $("#calcular").click(function(){
        var a= parseInt($("#peso").val());
        var b= parseInt($("#altura").val());
        var res=(Math.round(a/((b*b)/10000)));
        $("#resultado").val(res);
    });
});
$(function(){
    $("#mi-formulario").validate({
        rules:{
            nom:{
                required:true
            },
            correo:{
                required:true,
                email:true
            },
            pass:{
                required:true
            },
            fono:{
                required:true,
                number:true
            },
            fecha:{
                required:true
            },
            pass2:{
                required:true,
                equalTo:pass
            }

        },
        messages:{
            nom:{
                required: 'Ingrese nombre de usuario',
                minlength: 'Caracteres insuficientes (3)'
            },
            correo:{
                required: 'Ingrese correo de usuario',
                email: 'Formato de correo inválido'
            },
            pass:{
                required: 'Ingrese contraseña',
                minlength: 'Caracteres insuficientes (8)'
            },
            fono:{
                required: 'Ingrese teléfono',
                minlength: 'Cantidad de digitos insuficientes (9)'
            },
            fecha:{
                required: 'Seleccione una fecha válida',
                min: 'Fecha no corresponde'
            },
            pass2:{
                required: 'Ingrese una contraseña',
                minlength: 'Caracteres insuficientes (8)',
                equalTo: 'Contraseñas no coinciden'
            },
        },
    })
})