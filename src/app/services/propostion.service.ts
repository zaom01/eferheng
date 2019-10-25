import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PropostionService {

  uri = 'http://localhost:4000/propostion';

  constructor(private http: HttpClient) { }

  addProduct(Nav, Pasnav, Herem, Pesniyari) {
    const obj = {
      Nav,
      Pasnav,
      Herem,
      Pesniyari
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}
