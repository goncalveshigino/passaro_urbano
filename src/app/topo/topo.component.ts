import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'

import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/of'; 
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas:Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor( private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa//Retorna Oferta[]
    .debounceTime(1000)//Executa a accao do switchMap apos 1 segundo
    .distinctUntilChanged()
      .switchMap((termo: string) => {
        console.log('requisicao http para api')
        
          if(termo.trim() ===''){
             // retornar um observable de array de ofertas vazio
             return Observable.of<Oferta[]>([])
          }
          return this.ofertasService.pesquisaOfertas(termo)
      })

      this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas))
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter', termoDaBusca)
     this.subjectPesquisa.next(termoDaBusca)
  }

}
