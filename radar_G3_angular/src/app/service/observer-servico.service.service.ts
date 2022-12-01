import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientesService } from './clientes.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteObserverServicoService {

  constructor(private http:HttpClient) { 
    this.atualizaQuantidade()
  }

  public quantidade:Number = 0

  async atualizaQuantidade(){
    let lista = await new ClientesService(this.http).lista();
    this.quantidade = lista ? lista.length : 0;
  }
}