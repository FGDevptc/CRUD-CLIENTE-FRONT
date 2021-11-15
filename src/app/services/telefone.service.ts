import { Telefone } from 'src/app/model/telefone.=model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8080/telefones";


@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  constructor(private http: HttpClient) { }
  getAll(id_cliente : any): Observable<Telefone[]> {
    return this.http.get<Telefone[]>(baseUrl);
  }

  get(id: any): Observable<Telefone> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(id_cliente: any, data: any): Observable<any> {
    return this.http.post(`${baseUrl}/cliente?${id_cliente}`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
