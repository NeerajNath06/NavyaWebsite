import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {
  projectId: string | null = null;
  
  project = {
    title: 'Enterprise E-Commerce Platform',
    client: 'Retail Corporation',
    problem: 'The client needed a scalable e-commerce platform to handle high traffic and provide seamless shopping experience.',
    solution: 'We developed a full-stack solution using Angular for the frontend and ASP.NET Core for the backend, deployed on Azure cloud infrastructure.',
    techStack: ['Angular', 'ASP.NET Core', 'Azure', 'SQL Server', 'Redis', 'Docker'],
    timeline: '6 months',
    impact: 'Increased online sales by 150% and reduced page load time by 60%.'
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    // Load project data based on ID
  }
}

