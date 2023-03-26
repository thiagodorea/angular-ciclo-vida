import { Item } from './../../interfaces/iItem';
import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {

  @Input() itemQueVaiSerEditado!: Item

  editando = false;
  textoBtn = "Salvar"

  valorItem!: string;


  constructor(
    private service: ListaDeCompraService
  ) { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges){
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true;
      this.textoBtn = "Editar Item"
      this.valorItem  = this.itemQueVaiSerEditado?.nome;
    }

  }

  addItem(){
    this.service.adicionarItemNaLista(this.valorItem);
    this.limparCampo();
  }

  edItem(){
    this.service.editarItemNaLista(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo();
    this.editando = false;
    this.textoBtn = "Salvar";
  }

  limparCampo(){
    this.valorItem = ''
  }
}
