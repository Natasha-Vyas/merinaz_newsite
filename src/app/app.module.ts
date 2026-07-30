import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { FeaturesComponent } from './components/features/features.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutComponent } from './components/about/about.component';
import { ProcessComponent } from './components/process/process.component';
import { DiscountBannerComponent } from './components/discount-banner/discount-banner.component';
import { FooterComponent } from './components/footer/footer.component';

import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about/about.component';
import { ServicesPageComponent } from './pages/services/services.component';

import { DataService } from './services/data.service';
import { ApiService } from './services/api.service';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationComponent } from './pages/location/location.component';
import { SanitizeUrlPipe } from './pipes/sanitize-url.pipe';
import { ContactPageComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    ServicesComponent,
    AboutComponent,
    ProcessComponent,
    DiscountBannerComponent,
    FooterComponent,
    HomeComponent,
    AboutPageComponent,
    ServicesPageComponent,
    TestimonialsComponent,
    LocationsComponent,
    LocationComponent,
    SanitizeUrlPipe,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
