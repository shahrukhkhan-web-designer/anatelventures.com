import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { CarrerComponent } from './carrer/carrer.component';
import { ItServicesComponent } from './it-services/it-services.component';
import { DigitalMarketingComponent } from './digital-marketing/digital-marketing.component';
import { TourTravelsComponent } from './tour-travels/tour-travels.component';
import { EducationCounsellingComponent } from './education-counselling/education-counselling.component';
import { TermsConditonsComponent } from './terms-conditons/terms-conditons.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about-us', component:AboutComponent},
  {path:'contact-us', component:ContactComponent},
  {path:'our-services', component:OurServicesComponent},
  {path:'career', component:CarrerComponent},
  {path:'education-counselling', component:EducationCounsellingComponent},
  {path:'tour-travels', component:TourTravelsComponent},
  {path:'digital-marketing', component:DigitalMarketingComponent},
  {path:'it-services', component:ItServicesComponent},
  {path:'terms-and-conditions', component:TermsConditonsComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
