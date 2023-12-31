import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

 private url = " http://localhost:3000/customers" ;


  constructor(private http:HttpClient) { }

  getdata() :Observable<any>
  {
    return this.http.get<any>(this.url);


  }
}
