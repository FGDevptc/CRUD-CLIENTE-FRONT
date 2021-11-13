import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetClienteComponent } from './components/det-cliente/det-cliente.component';
import { InsClienteComponent } from './components/ins-cliente/ins-cliente.component';
import { ListClientesComponent } from './components/list-clientes/list-clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    InsClienteComponent,
    DetClienteComponent,
    ListClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
