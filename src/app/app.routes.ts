import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GetQuoteComponent } from './pages/get-quote/get-quote.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsComponent } from './pages/terms/terms.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CaseStudyComponent } from './pages/case-study/case-study.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio/:id', component: CaseStudyComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'get-quote', component: GetQuoteComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms', component: TermsComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

