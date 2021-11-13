import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetClienteComponent } from './components/det-cliente/det-cliente.component';
import { InsClienteComponent } from './components/ins-cliente/ins-cliente.component';
import { ListClientesComponent } from './components/list-clientes/list-clientes.component';

const routes: Routes = [
  { path: '', redirectTo: 'clientes', pathMatch: 'full' },
  { path: 'clientes', component: ListClientesComponent },
  { path: 'clientes/:id', component: DetClienteComponent },
  { path: 'inserir', component: InsClienteComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
