import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  private BASE_URL:string = "http://localhost:8080/api/cliente"

  constructor(private http:HttpClient) { }

  getClientes() : Observable<cliente[]> {

    return this.http.get<cliente[]>(this.BASE_URL)

  }

}
