import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export type Theme = 'light' | 'dark';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSubject = new BehaviorSubject<Theme>('dark');
  public theme$: Observable<Theme> = this.themeSubject.asObservable();

  constructor() {
    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') as Theme;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    this.setTheme(initialTheme);
  }

  getCurrentTheme(): Theme {
    return this.themeSubject.value;
  }

  setTheme(theme: Theme): void {
    this.themeSubject.next(theme);
    localStorage.setItem('theme', theme);
    
    // Apply theme class to document
    document.documentElement.classList.remove('light-theme', 'dark-theme');
    document.documentElement.classList.add(`${theme}-theme`);
  }

  toggleTheme(): void {
    const newTheme = this.getCurrentTheme() === 'dark' ? 'light' : 'dark';
    this.setTheme(newTheme);
  }
}

