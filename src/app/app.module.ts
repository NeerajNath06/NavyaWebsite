import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
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

import { routes } from './app.routes';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ServicesOverviewComponent } from './components/services-overview/services-overview.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    GetQuoteComponent,
    PrivacyPolicyComponent,
    TermsComponent,
    NotFoundComponent,
    CaseStudyComponent,
    HeroSectionComponent,
    ServicesOverviewComponent,
    TechnologiesComponent,
    WhyChooseUsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

