import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../services/peticion.service';

@Component({
  selector: 'app-listacomics',
  templateUrl: './listacomics.component.html',
  styleUrls: ['./listacomics.component.scss'],
  providers: [PeticionService]
})
export class ListacomicsComponent implements OnInit {

  public lista_comics;
  public likes_comics:Array<number>;

  constructor(
    private _peticionService: PeticionService
  ) { }

  ngOnInit() {
     // Llamando al servicio _peticionService 
     this._peticionService.getArticulos().subscribe(
      result => {
        console.log(result);
        this.lista_comics = result.data.results;
        console.log(this.lista_comics);
        this.inicializarArray();
        console.log(this.likes_comics);
      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
    
  }

  inicializarArray(){
    if(this.lista_comics){
      this.likes_comics = [];
      for(var i=0; i < Object.keys(this.lista_comics).length;i++){
        this.likes_comics[i] = 0;
      }
    }
  }
  
  gestionarLike(index, okLike) {
    if (okLike) {
      this.likes_comics[index] += 1;
    } else {
      this.likes_comics[index] -= 1;
    }
  }
}  

