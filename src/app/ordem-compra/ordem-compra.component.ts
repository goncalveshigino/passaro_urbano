import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.services'
import { Pedido } from '../shared/pedido.model'
import { FormGroup,FormControl, Validators } from '@angular/forms'
import {CarrinhoService} from '../carrinho.service'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService, CarrinhoService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number

  public formulario: FormGroup = new FormGroup({
    
    'address': new FormControl(null, [ Validators.required, Validators.minLength(3),Validators.maxLength(120)]),
    'number': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complement': new FormControl(null),
    'formPaygment': new FormControl(null, Validators.required)
  })

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
    
    ) { }

  ngOnInit() {
     console.log('Ordem CompraArray - de itens do carrinho', this.carrinhoService.exibirItens())
  }

  public confirmarCompra(): void {
    if(this.formulario.status ==='INVALID'){

      console.log('Formulario esta invalido')

      this.formulario.get('address').markAsTouched()
      this.formulario.get('number').markAsTouched()
      this.formulario.get('complement').markAsTouched()
      this.formulario.get('formPaygment').markAsTouched()
    
    }else {


      let pedido: Pedido = new Pedido(
        this.formulario.value.address,
        this.formulario.value.number,
        this.formulario.value.complement,
        this.formulario.value.formPaygment
      )

      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido

      })
    
    }
  }
}
