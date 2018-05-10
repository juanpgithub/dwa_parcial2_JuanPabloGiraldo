import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FilterPipe } from './pipes/filter.pipe';


import { AppComponent } from './app.component';
import { ListacomicsComponent } from './listacomics/listacomics.component';
import { TituloPipe } from './pipes/titulo.pipe';
import { FechaPipe } from './pipes/fecha.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ListacomicsComponent,
    FilterPipe,
    TituloPipe,
    FechaPipe
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
