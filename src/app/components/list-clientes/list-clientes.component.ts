import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { Cliente } from 'src/app/model/cliente.=model';
import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from "rxjs";

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css']
})
export class ListClientesComponent implements OnInit {

  clientesArray: Cliente[]=[];
  currentCliente: Cliente = {};
  IndiceCorrente = -1;
  exclusão = false;



  constructor(private clienteService: ClienteServiceService) { }

  ngOnInit(): void {
    this.listarClientes();
  }

  listarClientes(): void{
    this.clienteService.getAll().subscribe(
      data => {
        this.clientesArray = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );

  }

  deleteCliente(id: number): void {
    this.clienteService.delete(id).subscribe(
        data => {
          console.log(data);
          this.exclusão=true;
          this.clienteService.getAll().subscribe(data =>{
            this.clientesArray =data
          })
        },
        error => console.log(error));
  }



}
