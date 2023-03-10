import { Component } from '@angular/core';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css'],
})
export class CountryInputComponent {
  searchInput: string = '';

  search() {
    console.log(this.searchInput);
  }
}
