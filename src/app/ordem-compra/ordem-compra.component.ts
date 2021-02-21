import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { OrdemCompraService } from '../ordem-compra.services'
import { Pedido } from '../shared/pedido.model'


//ViewChild--- Permite decorar um atributo da class com os valores contidos em uma variavel de referencia do template
@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') public form: NgForm;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {

    let pedido: Pedido = new Pedido(
      this.form.value.address,
      this.form.value.number,
      this.form.value.complement,
      this.form.value.formPagyment
    );

   this.ordemCompraService.efetivarCompra(pedido)
   .subscribe((idPedido: number) => {
       console.log('Pedido cadastrado com sucesso! Id do Pedido: ' + idPedido)
   })
  }
}
