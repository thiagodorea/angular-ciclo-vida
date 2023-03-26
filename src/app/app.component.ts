import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Item } from './interfaces/iItem';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  listaDeCompra!: Array<Item>
  itemParaSerEditado!: Item;

  constructor(
    private service: ListaDeCompraService
  ) { }

  ngOnInit(): void {
    this.listaDeCompra = this.service.getListaDeCompra();
  }

  ngDoCheck(): void {
      this.service.salvarEmLocalStorage();
  }

  editarItem(item: Item){
    this.itemParaSerEditado = item;
  }
}
