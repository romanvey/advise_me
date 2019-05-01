import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GET_WEATHER_DATA } from '../enums/api';

@Injectable()
export class RestService {
  constructor(
    private http: HttpClient,
  ) { }

  getWeatherData(city): Observable<any> {
    const URL = `${GET_WEATHER_DATA}?q=${city}&appid=b6907d289e10d714a6e88b30761fae22`;
    return this.http.get<any>(URL);
  }
}
