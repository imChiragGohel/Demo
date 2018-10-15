import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CSC } from '../country-state-city';

@Injectable({
  providedIn: 'root'
})
export class CSCService {

  constructor(private http: HttpClient) { }
  
  private heroesUrl = 'api/CSCs';

  getCountry():Observable<CSC[]>{
    return this.http.get<CSC[]>(this.heroesUrl);
  }

}
