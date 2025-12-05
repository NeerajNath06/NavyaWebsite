import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="app-container">
      <app-header></app-header>
      <router-outlet></router-outlet>
      <app-footer></app-footer>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Navya Cloud & Software Solutions';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    // Theme service will initialize and apply theme on construction
    // This ensures theme is applied immediately
  }
}

