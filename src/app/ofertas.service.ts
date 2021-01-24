import { Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model'

import {URL_API} from './app.api'

import 'rxjs/add/operator/toPromise'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/retry'
import {Observable} from 'rxjs/Observable'


@Injectable()
export class OfertasService {

  

  constructor(private http: Http) { }

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise().then((resposta: Response) => resposta.json());
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: Response) => resposta.json())
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((respota: Response) => {
        return respota.json()[0]
      })
  }

public getComoUsarOfertaPorId(id: number): Promise<string>{
  return this.http.get(`${URL_API}/como-usar?id=${id}`)
  .toPromise()
  .then((resposta: Response) =>{
    return resposta.json()[0].descricao
  })
}

public getOndeFicaPorId(id: number): Promise<string> {
  return this.http.get(`${URL_API}/onde-fica?id=${id}`)
  .toPromise()
  .then((resposta: Response) =>{
    return resposta.json()[0].descricao
  })
}

  //Retornando um observable
  public pesquisaOfertas(termo: string): Observable<Oferta[]>{
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
    .retry(10)
    .map((resposta: Response) => resposta.json())
  }

}