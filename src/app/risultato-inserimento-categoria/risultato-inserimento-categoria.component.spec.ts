import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RisultatoInserimentoCategoriaComponent } from './risultato-inserimento-categoria.component';

describe('RisultatoInserimentoCategoriaComponent', () => {
  let component: RisultatoInserimentoCategoriaComponent;
  let fixture: ComponentFixture<RisultatoInserimentoCategoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RisultatoInserimentoCategoriaComponent]
    });
    fixture = TestBed.createComponent(RisultatoInserimentoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
