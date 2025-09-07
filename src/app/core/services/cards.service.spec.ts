// src/app/core/services/cards.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CardsService } from './cards.service';

describe('CardsService', () => {
  let service: CardsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(CardsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('debe obtener tarjetas', () => {
    const mock = [{ id: '1', nameProduct: 'MFUND', numberProduct: '123', detaildProduct: 'X', balanceProduct: 100 }];

    service.getCards().subscribe(res => {
      expect(res.length).toBe(1);
      expect(res[0].nameProduct).toBe('MFUND');
    });

    const req = httpMock.expectOne(req => req.url.includes('/cards'));
    expect(req.request.method).toBe('GET');
    req.flush(mock);
  });
});
