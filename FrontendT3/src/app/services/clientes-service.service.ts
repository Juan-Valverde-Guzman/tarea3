import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { clienteDTO } from '../model/clienteDTO';

@Injectable({
  providedIn: 'root'
})
export class ClientesServiceService {

  private BASE_URL:string = "http://localhost:8080/api/cliente"

  constructor(private http:HttpClient) { }

  getClientes() : Observable<clienteDTO[]> {

    return this.http.get<clienteDTO[]>(this.BASE_URL)

  }

  getClienteNombre(nombre:string) : Observable<clienteDTO> {

    return this.http.get<clienteDTO>(this.BASE_URL + "/" + nombre)

  }

}
