import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FilterPipe } from './pipes/filter.pipe';

// import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { ListacomicsComponent } from './listacomics/listacomics.component';
import { TituloPipe } from './pipes/titulo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListacomicsComponent,
    FilterPipe,
    TituloPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
