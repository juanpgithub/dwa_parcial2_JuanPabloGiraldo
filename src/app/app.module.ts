import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListacomicsComponent } from './listacomics/listacomics.component';


@NgModule({
  declarations: [
    AppComponent,
    ListacomicsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
