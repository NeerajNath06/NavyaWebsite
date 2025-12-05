import { Component } from '@angular/core';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  timeline: TimelineEvent[] = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize cloud and software solutions'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered enterprise solution to Fortune 500 company'
    },
    {
      year: '2022',
      title: 'Cloud Expertise Expansion',
      description: 'Expanded services to include Azure and AWS cloud deployments'
    },
    {
      year: '2023',
      title: 'Team Growth',
      description: 'Grew to 50+ talented engineers and developers'
    },
    {
      year: '2024',
      title: 'Global Presence',
      description: 'Served clients across 20+ countries worldwide'
    },
    {
      year: '2025',
      title: 'Innovation Leader',
      description: 'Leading the industry in modern software solutions'
    }
  ];
}

