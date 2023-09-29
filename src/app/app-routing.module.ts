import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RisultatoInserimentoCategoriaComponent } from './risultato-inserimento-categoria/risultato-inserimento-categoria.component';
import { InserimentoCategoriaComponent } from './inserimento-categoria/inserimento-categoria/inserimento-categoria.component';

const routes: Routes = [
  {
    path: 'inserisci-categoria',
    component: InserimentoCategoriaComponent,
  },
  {
    path: 'risultato-inserimento-categoria',
    component: RisultatoInserimentoCategoriaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
