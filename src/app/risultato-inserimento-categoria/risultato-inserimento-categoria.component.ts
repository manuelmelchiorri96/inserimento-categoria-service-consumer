import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-risultato-inserimento-categoria',
  templateUrl: './risultato-inserimento-categoria.component.html',
  styleUrls: ['./risultato-inserimento-categoria.component.css'],
})
export class RisultatoInserimentoCategoriaComponent implements OnInit {
  categoriaNome!: string;
  messaggioErrore!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.categoriaNome = params['nomeCategoria'];
      this.messaggioErrore = params['messaggioErrore'];
    });
  }
}
