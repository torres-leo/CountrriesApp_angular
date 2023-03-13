import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private api_url: string = 'https://restcountries.com/v3.1';

  params = new HttpParams().set(
    'fields',
    'name,population,currencies,flags,region,cca2'
  );

  constructor(private http: HttpClient) {}

  searchByName(value: string): Observable<Country[]> {
    const url = `${this.api_url}/name/${value}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  searchByCapital(value: string): Observable<Country[]> {
    const url = `${this.api_url}/capital/${value}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  searchByRegion(value: string): Observable<Country[]> {
    const url = `${this.api_url}/region/${value}`;
    return this.http.get<Country[]>(url, { params: this.params });
  }

  getCountryByCode(id: string): Observable<Country> {
    return this.http.get<Country>(`${this.api_url}/alpha?codes=${id}`);
  }
}
