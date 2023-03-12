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

  search(value: string) {
    this.errorExist = false;
    this.searchInput = value;

    this.countryService.searchByName(this.searchInput).subscribe(
      (countries) => {
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

  typedText(value: string) {
    this.errorExist = false;
  }
}
