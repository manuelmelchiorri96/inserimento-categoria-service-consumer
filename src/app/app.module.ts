import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InserimentoCategoriaComponent } from './inserimento-categoria/inserimento-categoria/inserimento-categoria.component';
import { RisultatoInserimentoCategoriaComponent } from './risultato-inserimento-categoria/risultato-inserimento-categoria.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InserimentoCategoriaComponent,
    RisultatoInserimentoCategoriaComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
