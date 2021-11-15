import { TelefoneService } from './../../services/telefone.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/model/cliente.=model';
import { Telefone } from 'src/app/model/telefone.=model';
import { ClienteServiceService } from 'src/app/services/cliente-service.service';



@Component({
  selector: 'app-det-cliente',
  templateUrl: './det-cliente.component.html',
  styleUrls: ['./det-cliente.component.css']
})
export class DetClienteComponent implements OnInit {
  cliente: Cliente = {
    nome: "",
    endereco: "",
    bairro: "",
    telefones: [{numeroTelefone: ""}]
  };

  erroExlcusao = false;

  qtdeTel: number = 0;

  submitted = false;

  constructor(private clienteService: ClienteServiceService, private telefoneService: TelefoneService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.carregarDados(this.route.snapshot.params.id);

  }

  carregarDados(id_cliente: number): void{
    this.clienteService.get(id_cliente).subscribe(
      data => {
        this.cliente = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  addTelefone(): void{
    this.cliente.telefones?.push({numeroTelefone: ""});
  }


  deleteTelefone(id: number): void {
    this.telefoneService.delete(id).subscribe(
        data => {
          console.log(data);
          this.clienteService.getAll().subscribe(data =>{
            this.cliente.telefones =data
          })
        },
        error => console.log(error));
  }

  atualizarCliente(){
    const data = {
      nome: this.cliente.nome,
      endereco: this.cliente.endereco,
      bairro: this.cliente.bairro,
      telefones: this.cliente.telefones
    };

    this.clienteService.update(this.route.snapshot.params.id, data).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
      }
    );

  }

}
