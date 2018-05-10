import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'titulocomic'
})

export class TituloPipe implements PipeTransform {
    transform(titulo:string){
        var caracter = 0;
        for(var i=0;i<titulo.length;i++){
            if(titulo.substr(i,1) == "(" ){
                caracter = i;
                break;
            }
        }
        return titulo.substr(0,caracter);
        // var fecha = titulo.substr(caracter+1,4);
        
    }
}
    
