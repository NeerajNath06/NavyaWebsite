import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  socialLinks = [
    { name: 'LinkedIn', icon: 'linkedin', url: '#' },
    { name: 'GitHub', icon: 'github', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'Facebook', icon: 'facebook', url: '#' }
  ];
}

