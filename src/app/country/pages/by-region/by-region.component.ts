import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
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

  constructor(private countryService: CountryService) {}

  search(value: string) {
    this.errorExist = false;
    this.searchInput = value;

    this.countryService.searchByRegion(this.searchInput).subscribe(
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
