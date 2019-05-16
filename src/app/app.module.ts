import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { ContactComponent } from './contact/contact.component';
import { CarrerComponent } from './carrer/carrer.component';
import { TermsConditonsComponent } from './terms-conditons/terms-conditons.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EducationCounsellingComponent } from './education-counselling/education-counselling.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { ItServicesComponent } from './it-services/it-services.component';
import { TourTravelsComponent } from './tour-travels/tour-travels.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OurServicesComponent,
    ContactComponent,
    CarrerComponent,
    TermsConditonsComponent,
    PrivacyPolicyComponent,
    HeaderComponent,
    FooterComponent,
    EducationCounsellingComponent,
    DigitalMarketingComponent,
    ItServicesComponent,
    TourTravelsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
