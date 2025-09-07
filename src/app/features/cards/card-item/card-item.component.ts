import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Card } from '../../../core/models/card.model';



@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  @Input() card!: Card;

  getImage(nameProduct: string): string {
    switch (nameProduct) {
      case 'MFUND':
        return 'https://picsum.photos/400/200?random=1';
      case 'CREA':
        return 'https://picsum.photos/400/200?random=2';
      case 'FICS':
        return 'https://picsum.photos/400/200?random=3';
      case 'BOLT':
        return 'https://picsum.photos/400/200?random=4';
      default:
        return 'https://picsum.photos/400/200?random=99';
    }
  }
}
