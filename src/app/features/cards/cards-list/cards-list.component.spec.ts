// src/app/features/cards/cards-list/cards-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsListComponent } from './cards-list.component';
import { of } from 'rxjs';
import { CardsService } from '../../../core/services/cards.service';

describe('CardsListComponent', () => {
  let comp: CardsListComponent;
  let fixture: ComponentFixture<CardsListComponent>;

  const mockSvc = {
    getCards: () => of([{ nameProduct: 'MFUND', numberProduct: '1', detaildProduct: 'x', balanceProduct: 1 }])
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsListComponent],
      providers: [{ provide: CardsService, useValue: mockSvc }]
    }).compileComponents();

    fixture = TestBed.createComponent(CardsListComponent);
    comp = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('pinta al menos una tarjeta', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.card').length).toBeGreaterThan(0);
  });
});
