import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './pages/clientes/clientes.component';
import { PedidosComponent } from './pages/pedidos/pedidos.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { ModalClientesComponent } from './pages/modal-clientes/modal-clientes.component';
import { ModalProdutosComponent } from './pages/modal-produtos/modal-produtos.component';
import { ModalPedidosComponent } from './pages/modal-pedidos/modal-pedidos.component';
import { CadastrapedidoComponent } from './pages/cadastrapedido/cadastrapedido.component';
import { ClientesServiceComponent } from './service/clientes-service/clientes-service.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ClientesComponent,
    PedidosComponent,
    ProdutosComponent,
    ModalClientesComponent,
    ModalProdutosComponent,
    ModalPedidosComponent,
    CadastrapedidoComponent,
    ClientesServiceComponent,
    
    ProdutosComponent
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
