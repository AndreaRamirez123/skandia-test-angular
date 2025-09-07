import { Component } from '@angular/core';

// 👇 importa todos los componentes standalone que usas en home
import { HeroComponent } from '../../shared/hero/hero.component';
import { CardsListComponent } from '../cards/cards-list/cards-list.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    HeroComponent,
    CardsListComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class HomeComponent {}
