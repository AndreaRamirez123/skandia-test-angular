import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component';
import { HeroComponent } from './shared/hero/hero.component';
import { CardsListComponent } from './features/cards/cards-list/cards-list.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, CardsListComponent, FooterComponent],
  template: `
    <app-header></app-header>
    <app-hero></app-hero>
    <main class="main-content">
      <app-cards-list></app-cards-list>
    </main>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
