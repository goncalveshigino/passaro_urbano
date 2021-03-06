import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.services'
import { Pedido } from '../shared/pedido.model'
import { FormGroup,FormControl } from '@angular/forms'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    
    'address': new FormControl(null),
    'number': new FormControl(null),
    'complement': new FormControl(null),
    'formPaygment': new FormControl(null)
  })

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
    console.log(this.formulario)
  }
}
