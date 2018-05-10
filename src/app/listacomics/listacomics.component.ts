import { Component, OnInit } from '@angular/core';
import { PeticionService } from '../services/peticion.service';

@Component({
  selector: 'app-listacomics',
  templateUrl: './listacomics.component.html',
  styleUrls: ['./listacomics.component.scss'],
  providers: [PeticionService]
})
export class ListacomicsComponent implements OnInit {

  constructor(
    private _peticionService: PeticionService
  ) { }

  ngOnInit() {
     // Llamando al servicio _peticionService 
     this._peticionService.getArticulos().subscribe(
      result => {
        console.log(result);
        // this.lista_pokemones = result;

      },
      error => {
        var errorMsj = <any>error;
        console.log(errorMsj);
      }
    );
  }

}
