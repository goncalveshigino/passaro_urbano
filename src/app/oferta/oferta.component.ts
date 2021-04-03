import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { OfertasService} from '../ofertas.service'

import {CarrinhoService} from '../carrinho.service'

import {Oferta} from '../shared/oferta.model'

import 'rxjs/Rx'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService, CarrinhoService]
})
export class OfertaComponent implements OnInit,OnDestroy {



  public oferta: Oferta;
  
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit() {

    console.log('Oferta - de itens do carrinho', this.carrinhoService.exibirItens())


   this.route.params.subscribe((parametros: Params) =>{

    this.ofertasService.getOfertaPorId(parametros.id)
    .then((oferta: Oferta) => {
      this.oferta = oferta
    })

   })



  }

  ngOnDestroy(){
  
  }

}
