import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { ListacomicsComponent } from './listacomics/listacomics.component';


@NgModule({
  declarations: [
    AppComponent,
    ListacomicsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
