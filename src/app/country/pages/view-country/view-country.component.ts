import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css'],
})
export class ViewCountryComponent implements OnInit {
  country!: Country;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe(({ id }) => {
    //   // console.log(params);
    //   this.countryService.getCountryByCode(id).subscribe((country) => {
    //     console.log(country);
    //   });
    // });

    this.route.params
      .pipe(
        switchMap((params) =>
          this.countryService.getCountryByCode(params['id'])
        ),
        tap(console.log)
      )
      .subscribe((country) => {
        this.country = country[0];
      });
  }
}
