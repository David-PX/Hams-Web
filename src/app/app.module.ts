import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landingPage/pages/landing-page/landing-page.component';
import { HeaderComponent } from './landingPage/components/header/header.component';
import { FooterComponent } from './landingPage/components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { ContactUsComponent } from './landingPage/pages/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  exports:[
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
