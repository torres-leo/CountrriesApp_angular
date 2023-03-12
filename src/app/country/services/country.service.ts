import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private api_url: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) {}

  searchByName(value: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api_url}/name/${value}`);
  }

  searchByCapital(value: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api_url}/capital/${value}`);
  }

  searchByRegion(value: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.api_url}/region/${value}`);
  }

  getCountryByCode(id: string): Observable<Country> {
    return this.http.get<Country>(`${this.api_url}/alpha?codes=${id}`);
  }
}
