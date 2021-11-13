import { Telefone } from 'src/app/model/telefone.=model';
import { Cliente } from './../model/cliente.=model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class ClienteServiceService {
  constructor(private http: HttpClient) {}


  getAll(): Observable<any> {
    return this.http.get("http://localhost:8080/clientes");
  }

  get(id: any): Observable<Cliente> {
    return this.http.get(`"http://localhost:8080/clientes"/${id}`);
  }

  create(data: any): Observable<Cliente> {
    return this.http.post("http://localhost:8080/clientes", data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`"http://localhost:8080/clientes"/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`"http://localhost:8080/clientes"/${id}`);
  }

}
