import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from 'src/app/model/categoria';
import { InserimentoCategoriaService } from 'src/app/service/inserimento-categoria.service';

@Component({
  selector: 'app-inserimento-categoria',
  templateUrl: './inserimento-categoria.component.html',
  styleUrls: ['./inserimento-categoria.component.css'],
})
export class InserimentoCategoriaComponent {
  categoria: Categoria = new Categoria('');

  constructor(
    private categoriaService: InserimentoCategoriaService,
    private router: Router
  ) {}

  inserisciCategoria() {
    this.categoriaService.inserisciCategoria(this.categoria).subscribe({
      next: (data) => {
        console.log(data);
        console.log(this.categoria);

        this.vediRisultatoInserimento();
      },
      error: (error) => {
        console.log(error);
        console.log(this.categoria);

        this.vediRisultatoInserimento(error.error.message);
      },
    });
  }

  vediRisultatoInserimento(messaggioErrore?: string) {
    this.router.navigate(['risultato-inserimento-categoria'], {
      queryParams: {
        nomeCategoria: this.categoria.nome,
        messaggioErrore: messaggioErrore,
      },
    });
  }
}
