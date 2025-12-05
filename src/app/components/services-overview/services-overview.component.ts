import { Component } from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
  category: string;
}

@Component({
  selector: 'app-services-overview',
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.scss']
})
export class ServicesOverviewComponent {
  services: Service[] = [
    {
      icon: 'cloud',
      title: 'Cloud Architecture',
      description: 'Scalable and secure cloud infrastructure design',
      category: 'cloud'
    },
    {
      icon: 'deploy',
      title: 'Azure / AWS Deployment',
      description: 'Expert cloud deployment and migration services',
      category: 'cloud'
    },
    {
      icon: 'migration',
      title: 'Cloud Migration',
      description: 'Seamless transition to cloud platforms',
      category: 'cloud'
    },
    {
      icon: 'devops',
      title: 'DevOps CI/CD',
      description: 'Automated pipelines for faster delivery',
      category: 'cloud'
    },
    {
      icon: 'api',
      title: 'ASP.NET Core APIs',
      description: 'High-performance RESTful API development',
      category: 'development'
    },
    {
      icon: 'angular',
      title: 'Angular Web Apps',
      description: 'Modern, responsive single-page applications',
      category: 'development'
    },
    {
      icon: 'microservices',
      title: 'Microservices',
      description: 'Scalable microservices architecture',
      category: 'development'
    },
    {
      icon: 'erp',
      title: 'ERP/CRM Solutions',
      description: 'Custom enterprise software solutions',
      category: 'development'
    },
    {
      icon: 'auth',
      title: 'JWT Auth',
      description: 'Secure authentication and authorization',
      category: 'features'
    },
    {
      icon: 'ai',
      title: 'AI/ML Add-ons',
      description: 'Intelligent features powered by AI',
      category: 'features'
    },
    {
      icon: 'dashboard',
      title: 'Real-time Dashboards',
      description: 'Live data visualization and analytics',
      category: 'features'
    },
    {
      icon: 'backend',
      title: 'Scalable Backend',
      description: 'Robust and scalable server infrastructure',
      category: 'features'
    }
  ];
}

