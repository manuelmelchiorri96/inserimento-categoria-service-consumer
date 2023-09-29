import { TestBed } from '@angular/core/testing';

import { InserimentoCategoriaService } from './inserimento-categoria.service';

describe('InserimentoCategoriaService', () => {
  let service: InserimentoCategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InserimentoCategoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
