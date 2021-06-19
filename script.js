
// Creando un objeto
class Producto{
    constructor(nombre,precio,kcal){
        this.nombre=nombre.toLowerCase();
        this.precio=parseFloat(precio);
        this.kcal=parseFloat(kcal);
        this.vendido=false;
    }
    IvaDesc(){
        this.precio= (this.precio * 1.21) - (this.precio * 20)/100; 
    }
    vender(){
        this.vendido=true;
    }
    
    
    
}
let producto1 = new Producto("hamburgueza de lenteja",400,300);
let producto2 = new Producto("ensalada",240,190);
producto1.IvaDesc();
producto1.vender();
producto2.IvaDesc();
console.log(producto1);
console.log(producto2);

// Probando un bucle.
let condicion= true;
do{
let nombre=prompt("Ingrese el nombre del articulo");
let precio=parseFloat(prompt("Ingrese el precio del articulo"));
let kcal=parseFloat(prompt("Ingrese las calorias totales del articulo"));
let producto1 = new Producto(nombre,precio,kcal);
let producto2= new Producto(nombre,precio,kcal);
console.log(producto1);
console.log(producto2);

condicion= confirm("¿Querés seguir agregando productos?")
}while(condicion != false)