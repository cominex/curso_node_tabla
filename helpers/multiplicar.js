
const fs = require('fs');
let colors = require('colors');

colors.setTheme({
    custom: ['yellow', 'bold', 'bgRed']
  });


const crearArchivo = async(base=5, listar, hasta=10) => {
try {
    
    
    let salida, consola ='';
    for(let i=1;i<=hasta;i++) {
    
        salida+=`${base} ${'x'} ${i} = ${base*i}\n`;
        consola+=`${base} ${'x'.green} ${i} = ${base*i}\n`;
    }
    if(listar){
        
        console.log('========================'.green);
        console.log('   Tabla del'.green, colors.blue(base));
        console.log('========================'.green);
        
        
        
        console.log(colors.custom(consola));
    }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        //console.log('Tabla del ${base} creado el archivo correctamente');
        return `Tabla del ${base} creado correctamente en el archivo\n`;
    }

    
    catch(err) {
        throw(err);
    }
} 

module.exports = {
    crearArchivo
}