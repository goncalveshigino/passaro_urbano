import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.services'
import { Pedido } from '../shared/pedido.model'
import { FormGroup,FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    
    'address': new FormControl(null, [ Validators.required, Validators.minLength(3),Validators.maxLength(120)]),
    'number': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complement': new FormControl(null),
    'formPaygment': new FormControl(null, Validators.required)
  })

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
    console.log(this.formulario)
  }
}
