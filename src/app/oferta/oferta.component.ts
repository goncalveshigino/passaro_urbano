import { Component, OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';
import { Oferta } from '../shared/oferta.model'
import { OfertasService} from '../ofertas.service'

import 'rxjs/Rx'

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit,OnDestroy {



  public oferta: Oferta;
  
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService) { }

  ngOnInit() {


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
