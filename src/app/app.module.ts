import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landingPage/pages/landing-page/landing-page.component';
import { HeaderComponent } from './landingPage/components/header/header.component';
import { FooterComponent } from './landingPage/components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { ContactUsComponent } from './landingPage/pages/contact-us/contact-us.component';
import { GaleryPageComponent } from './landingPage/pages/galery-page/galery-page.component';
import { NosotrosComponent } from './landingPage/pages/nosotros/nosotros.component';
import { NgxMaskModule, IConfig } from 'ngx-mask'

export const options: Partial<null|IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FooterComponent,
    ContactUsComponent,
    GaleryPageComponent,
    NosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgxMaskModule.forRoot()
  ],
  exports:[
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
