import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeService, Theme } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileMenuOpen = false;
  currentTheme: Theme = 'dark';

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => {
      this.currentTheme = theme;
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}

