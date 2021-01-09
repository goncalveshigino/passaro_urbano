import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { OfertasService } from '../../ofertas.service'
@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasService]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    //Acessar parametros da rota pai
    this.ofertasService.getOndeFicaPorId(this.route.parent.snapshot.params['id'])
      .then((descricao: string) => {
        this.ondeFica = descricao
      })
  }

}
