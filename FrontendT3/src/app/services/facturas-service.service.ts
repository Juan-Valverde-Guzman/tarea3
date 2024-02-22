import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { factura } from '../model/factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturasServiceService {

  private BASE_URL:string = "http://localhost:8080/api/factura"

  private httpHeaders:HttpHeaders = new HttpHeaders({'Content-Type' : 'application/json'})

  constructor(private http:HttpClient) { }

  postFactura(factura:factura) : Observable<factura> {

    return this.http.post<factura>(this.BASE_URL, factura, {headers:this.httpHeaders})

  }

}
