import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styleUrls: ['./by-region.component.css'],
})
export class ByRegionComponent {
  searchInput: string = '';
  errorExist = false;
  countries: Country[] = [];
  capital: string = 'capital';
  regions: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  regionActive = '';

  constructor(private countryService: CountryService) {}

  activateRegion(region: string) {
    if (region === this.regionActive) return;

    this.regionActive = region;
    this.countries = [];

    this.countryService.searchByRegion(region).subscribe((countries) => {
      this.countries = countries;
    });
  }

  setActiveRegion(region: string) {
    return region === this.regionActive
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }
}
