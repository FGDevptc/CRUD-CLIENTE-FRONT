import { Telefone } from 'src/app/model/telefone.=model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelefoneService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Telefone[]> {
    return this.http.get<Telefone[]>("http://localhost:8080/telefones");
  }

  get(id: any): Observable<Telefone> {
    return this.http.get(`"http://localhost:8080/telefones"/${id}`);
  }

  create(data: any, cliente: any): Observable<any> {
    return this.http.post("http://localhost:8080/telefones", data);
  }
  update(id: any, data: any): Observable<any> {
    return this.http.put(`"http://localhost:8080/telefones"/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`"http://localhost:8080/telefones"/${id}`);
  }

  findByID(id: any): Observable<Telefone[]> {
    return this.http.get<Telefone[]>(`"http://localhost:8080/Telefones"?id=${id}`);
  }

}
