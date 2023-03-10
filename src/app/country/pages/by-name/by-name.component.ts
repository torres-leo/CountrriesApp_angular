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

  constructor(private countryService: CountryService) {}

  search() {
    this.errorExist = false;
    this.countryService.searchByName(this.searchInput).subscribe(
      (countries) => {
        console.log(countries);
        this.countries = countries;
      },
      (error) => {
        console.error('Error: ', error);
        this.errorExist = true;
        this.countries = [];
        setTimeout(() => {
          this.searchInput = '';
          this.errorExist = false;
        }, 6000);
      }
    );
  }
}
