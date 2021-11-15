import { Telefone } from 'src/app/model/telefone.=model';
import { Cliente } from './../model/cliente.=model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/clientes";

@Injectable({
  providedIn: 'root',
})



export class ClienteServiceService {
  constructor(private http: HttpClient) {}



  getAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(baseUrl);
  }

  get(id: any): Observable<Cliente> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<Cliente> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.patch(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }


}
