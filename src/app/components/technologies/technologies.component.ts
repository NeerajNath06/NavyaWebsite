import { Component } from '@angular/core';

interface Technology {
  name: string;
  icon: string;
  category: string;
}

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent {
  technologies: Technology[] = [
    // .NET Technologies
    { name: 'ASP.NET Core', icon: 'dotnet', category: 'backend' },
    { name: '.NET', icon: 'dotnet', category: 'backend' },
    { name: 'C#', icon: 'csharp', category: 'backend' },
    { name: 'Entity Framework', icon: 'ef', category: 'backend' },
    { name: 'Blazor', icon: 'blazor', category: 'frontend' },
    
    // Frontend Technologies
    { name: 'Angular', icon: 'angular', category: 'frontend' },
    { name: 'React.js', icon: 'react', category: 'frontend' },
    { name: 'React Native', icon: 'react-native', category: 'mobile' },
    
    // Databases
    { name: 'PostgreSQL', icon: 'postgresql', category: 'database' },
    { name: 'MySQL', icon: 'mysql', category: 'database' },
    { name: 'SQL Server', icon: 'sqlserver', category: 'database' },
    { name: 'MongoDB', icon: 'mongodb', category: 'database' },
    
    // Cloud & Infrastructure
    { name: 'Azure', icon: 'azure', category: 'cloud' },
    { name: 'AWS', icon: 'aws', category: 'cloud' },
    { name: 'Solutions Architect', icon: 'architect', category: 'cloud' },
    
    // DevOps & Tools
    { name: 'Docker', icon: 'docker', category: 'devops' },
    { name: 'GitHub', icon: 'github', category: 'devops' },
    { name: 'Redis', icon: 'redis', category: 'devops' }
  ];

  getTechIcon(icon: string): string {
    const iconMap: { [key: string]: string } = {
      'dotnet': '.NET',
      'csharp': 'C#',
      'ef': 'EF',
      'blazor': '⚡',
      'angular': '🅰',
      'react': '⚛',
      'react-native': '📱',
      'postgresql': '🐘',
      'mysql': '🗄',
      'sqlserver': '💾',
      'mongodb': '🍃',
      'azure': '☁',
      'aws': '🌐',
      'architect': '🏗',
      'docker': '🐳',
      'github': '🔷',
      'redis': '⚡'
    };
    return iconMap[icon] || icon.charAt(0).toUpperCase();
  }
}
