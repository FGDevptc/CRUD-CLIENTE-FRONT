
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

  ArrayTelefones: Telefone [] = [{numeroTelefone: ""}];

  submitted = false;

  clienteResponse: Cliente = {};

  erroExlcusao = false;

  constructor(private clienteService: ClienteServiceService, private telefoneService: TelefoneService) {}

  ngOnInit(): void {}

  cadastrarCliente(): void {
    const data = {
      nome: this.cliente.nome,
      endereco: this.cliente.endereco,
      bairro: this.cliente.bairro,
      telefones: this.ArrayTelefones
    };
    console.log(data);



    this.clienteService.create(data).subscribe(
      (response) => {
        this.clienteResponse = response;
        console.log("Cliente:")
        console.log(this.clienteResponse);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );

  }

  addTelefone(){
    this.ArrayTelefones.push(
      {numeroTelefone: ""}
    );
  }
  removeTelefone(i: number){
    if(this.ArrayTelefones.length>1){
      this.ArrayTelefones.splice(i, 1);
    }
    else this.erroExlcusao = true;

  }

  limpardados(){
    this.cliente = {
      nome: "",
      endereco: "",
      bairro: ""
    }
    this.ArrayTelefones = [{numeroTelefone: ""}]
  }

  newCliente(): void {
    this.submitted = false;
    this.cliente = {
      nome: '',
      endereco: '',
      bairro: ''
    };
    this.ArrayTelefones = [{numeroTelefone: ""}]
  }


}
