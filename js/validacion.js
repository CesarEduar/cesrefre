function ingresar()
{

var usuario="cesar"
var contraseña="examen"; 

if (document.frmingreso.txtusuario.value==usuario &&
    document.frmingreso.txtcontraseña.value==contraseña)   
{
    document.location="html/Inicio.html"
}
else
{
    alert("Usuario o Contraseña correcta, porfavor ingrese datos correctos")
}

}


