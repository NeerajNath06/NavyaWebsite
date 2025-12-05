import { Component } from '@angular/core';

interface USP {
  text: string;
}

@Component({
  selector: 'app-why-choose-us',
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent {
  usps: USP[] = [
    { text: 'Full-stack expertise' },
    { text: 'Cloud-native solutions' },
    { text: 'Modern UI/UX' },
    { text: 'Fast delivery' },
    { text: 'Secure architecture' },
    { text: 'Long-term support' }
  ];
}

