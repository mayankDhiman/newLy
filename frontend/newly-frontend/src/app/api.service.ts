import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl = "http://127.0.0.1:8000"
  HttpHeaders = new HttpHeaders({'Content-type': 'application/json'})


  constructor(private http: HttpClient) { }

  getAllArticles(): Observable <any> {
    return this.http.get(this.baseurl + '/deliver-articles/',
    {headers: this.HttpHeaders});
  }
}
