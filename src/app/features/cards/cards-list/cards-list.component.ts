import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../../core/models/card.model';
import { CardsService } from '../../../core/services/cards.service';

@Component({
  selector: 'app-cards-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  cards: Card[] = [];
  loading = true;
  errorMessage = '';
  successMessage = '';

  constructor(private cardsService: CardsService) { }

ngOnInit(): void {
  this.loading = true;
  this.cardsService.getCards().subscribe({
    next: (data: Card[]) => {
      this.cards = data;
      this.successMessage = '¡Tarjetas cargadas exitosamente!';
      this.loading = false;
    },
    error: (err: unknown) => {
      console.error(err);
      this.errorMessage = 'Error al cargar las tarjetas. Intenta nuevamente.';
      this.loading = false;
    }
  });
}

  getImage(productName: string): string {
    const images: { [key: string]: string } = {
      MFUND: 'https://picsum.photos/300/200?random=1',
      CREA: 'https://picsum.photos/300/200?random=2',
      FICS: 'https://picsum.photos/300/200?random=3',
      BOLT: 'https://picsum.photos/300/200?random=4',
    };
    return images[productName] || 'https://picsum.photos/300/200';
  }
}


