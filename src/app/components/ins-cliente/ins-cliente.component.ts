
import { TelefoneService } from './../../services/telefone.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente.=model';
import { Telefone } from 'src/app/model/telefone.=model';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';
import { Observable,Subject } from "rxjs";

@Component({
  selector: 'app-ins-cliente',
  templateUrl: './ins-cliente.component.html',
  styleUrls: ['./ins-cliente.component.css'],
})
export class InsClienteComponent implements OnInit {
  cliente: Cliente = {
    nome: '',
    endereco: '',
    bairro: '',
  };


  qtdTel: number = 0;

  ArrayTelefones: Telefone [] = [{telefone: ""}];

  submitted = false;

  clienteResponse: Cliente = {};

  constructor(private clienteService: ClienteServiceService, private telefoneService: TelefoneService) {}

  ngOnInit(): void {}

  saveCliente(): void {
    const data = {
      nome: this.cliente.nome,
      endereco: this.cliente.endereco,
      bairro: this.cliente.bairro,
      telefone: this.ArrayTelefones
    };
    console.log(data.telefone);
    this.clienteService.create(data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
        this.clienteResponse = response;
      },
      (error) => {
        console.log(error);
      }
    );

  }

  addTelefone(){
    this.qtdTel++;
  }

  newCliente(): void {
    this.submitted = false;
    this.cliente = {
      nome: '',
      endereco: '',
      bairro: ''
    };
  }


}
