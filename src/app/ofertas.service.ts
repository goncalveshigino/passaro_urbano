import { Oferta } from './shared/oferta.model'
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import {URL_API} from './app.api'

import 'rxjs/add/operator/toPromise'


@Injectable()
export class OfertasService {

  

  constructor(private http: Http) { }

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise().then((resposta: any) => resposta.json());
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((respota: any) => {
        return respota.json()[0]
      })
  }

public getComoUsarOfertaPorId(id: number): Promise<string>{
  return this.http.get(`${URL_API}/como-usar?id=${id}`)
  .toPromise()
  .then((resposta: any) =>{
    return resposta.json()[0].descricao
  })
}

public getOndeFicaPorId(id: number): Promise<string> {
  return this.http.get(`${URL_API}/onde-fica?id=${id}`)
  .toPromise()
  .then((resposta: any) =>{
    return resposta.json()[0].descricao
  })
}

}