import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import '../util/rxjs-extensions'


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas:Observable<Oferta[]>
  public ofertas2: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor( private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa//Retorna Oferta[]
    .debounceTime(1000)//Executa a accao do switchMap apos 1 segundo
    .distinctUntilChanged()//Para fazer pesquisas distintas
      .switchMap((termo: string) => {
        console.log('requisicao http para api')
        
          if(termo.trim() ===''){
             // retornar um observable de array de ofertas vazio
             return Observable.of<Oferta[]>([])
          }
          return this.ofertasService.pesquisaOfertas(termo)
      })
      .catch((err: any) => {
        console.log(err)
        return Observable.of<Oferta[]>([])
      })

      this.ofertas.subscribe((ofertas: Oferta[]) => {
        console.log(ofertas)
          this.ofertas2 = ofertas
      })
  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter', termoDaBusca)
     this.subjectPesquisa.next(termoDaBusca)
  }

}
