import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styleUrls: ['./by-capital.component.css'],
})
export class ByCapitalComponent {
  searchInput: string = '';
  errorExist = false;
  countries: Country[] = [];
  capital: string = 'capital';

  constructor(private countryService: CountryService) {}

  search(value: string) {
    this.errorExist = false;
    this.searchInput = value;

    this.countryService.searchByCapital(this.searchInput).subscribe(
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
