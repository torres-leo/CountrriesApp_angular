import { Component, ViewChild } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-name',
  templateUrl: './by-name.component.html',
  styleUrls: ['./by-name.component.css'],
})
export class ByNameComponent {
  searchInput: string = '';
  errorExist = false;
  countries: Country[] = [];

  SugCountries: Country[] = [];
  suggestActive: boolean = false;

  constructor(private countryService: CountryService) {}

  search(value: string) {
    this.suggestActive = false;

    this.errorExist = false;
    this.searchInput = value;

    this.countryService.searchByName(this.searchInput).subscribe(
      (countries) => {
        console.log(countries);
        this.countries = countries;
      },
      (error) => {
        this.errorExist = true;
        this.countries = [];
        setTimeout(() => {
          this.searchInput = '';
          this.errorExist = false;
        }, 6000);
      }
    );
  }

  suggestText(value: string) {
    this.errorExist = false;
    this.searchInput = value;
    this.suggestActive = true;

    this.countryService.searchByName(value).subscribe((countries) => {
      this.SugCountries = countries.splice(0, 5);
    });
  }

  suggestCountry(value: string) {
    this.search(value);
  }
}
