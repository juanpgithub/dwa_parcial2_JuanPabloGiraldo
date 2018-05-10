import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'titulocomic'
})

export class TituloPipe implements PipeTransform {
    transform(titulo:string){
        console.log(titulo);
        var caracter = 0;
        for(var i=0;i<titulo.length;i++){
            if(titulo.substr(i,1) == "(" ){
                caracter = i;
                break;
            }
        }
        console.log(caracter);
        var titulopeque = titulo.substr(0,caracter);
        var fecha = titulo.substr(caracter+1,4);
        console.log(titulopeque);
        console.log(fecha);
        return titulopeque;
    }
}
    
