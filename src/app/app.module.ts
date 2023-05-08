import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryInfoComponent } from 'src/app/components/country-info/country-info.component';
import { CountrySummaryComponent } from './components/country-summary/country-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryInfoComponent,
    CountrySummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  //
}
