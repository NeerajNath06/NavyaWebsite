import { Component } from '@angular/core';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  selectedFilter: string = 'all';

  filters = [
    { label: 'All', value: 'all' },
    { label: 'Web Apps', value: 'web' },
    { label: 'Cloud Deployments', value: 'cloud' },
    { label: 'APIs', value: 'api' },
    { label: 'Dashboards', value: 'dashboard' }
  ];

  projects: Project[] = [
    {
      id: '1',
      title: 'Enterprise E-Commerce Platform',
      category: 'web',
      description: 'Full-stack e-commerce solution with real-time inventory',
      tech: ['Angular', 'ASP.NET Core', 'Azure', 'SQL Server'],
      image: '/assets/portfolio/project-1.jpg'
    },
    {
      id: '2',
      title: 'Cloud Migration - Retail Chain',
      category: 'cloud',
      description: 'Seamless migration of legacy systems to Azure cloud',
      tech: ['Azure', 'DevOps', 'Docker', 'CI/CD'],
      image: '/assets/portfolio/project-2.jpg'
    },
    {
      id: '3',
      title: 'RESTful API Gateway',
      category: 'api',
      description: 'High-performance API gateway with authentication',
      tech: ['ASP.NET Core', 'JWT', 'Redis', 'Docker'],
      image: '/assets/portfolio/project-3.jpg'
    },
    {
      id: '4',
      title: 'Analytics Dashboard',
      category: 'dashboard',
      description: 'Real-time business intelligence dashboard',
      tech: ['Angular', 'ASP.NET Core', 'Chart.js', 'WebSocket'],
      image: '/assets/portfolio/project-4.jpg'
    },
    {
      id: '5',
      title: 'Healthcare Management System',
      category: 'web',
      description: 'Patient management system with secure data handling',
      tech: ['Angular', 'ASP.NET Core', 'Azure', 'SQL Server'],
      image: '/assets/portfolio/project-5.jpg'
    },
    {
      id: '6',
      title: 'AWS Infrastructure Setup',
      category: 'cloud',
      description: 'Scalable infrastructure on AWS with auto-scaling',
      tech: ['AWS', 'Terraform', 'Kubernetes', 'CI/CD'],
      image: '/assets/portfolio/project-6.jpg'
    }
  ];

  get filteredProjects(): Project[] {
    if (this.selectedFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.selectedFilter);
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
  }
}

