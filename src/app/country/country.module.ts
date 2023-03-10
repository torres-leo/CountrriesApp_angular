import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ByCapitalComponent } from './pages/by-capital/by-capital.component';
import { ByNameComponent } from './pages/by-name/by-name.component';
import { ByRegionComponent } from './pages/by-region/by-region.component';
import { ViewCountryComponent } from './pages/view-country/view-country.component';
import { RouterModule } from '@angular/router';
import { CountryTableComponent } from './components/country-table/country-table.component';
import { CountryInputComponent } from './components/country-input/country-input.component';

@NgModule({
  declarations: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    ViewCountryComponent,
    CountryTableComponent,
    CountryInputComponent,
  ],
  imports: [CommonModule, FormsModule, HttpClientModule, RouterModule],
  exports: [
    ByCapitalComponent,
    ByNameComponent,
    ByRegionComponent,
    ViewCountryComponent,
  ],
})
export class CountryModule {}
