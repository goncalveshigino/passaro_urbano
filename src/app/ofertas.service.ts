import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import {Oferta} from './shared/oferta.model';

import 'rxps/add/operator/toPromise';


@Injectable()
export class OfertasService {
 
  constructor(private  http: Http){}

  public getOfertas(): Promise<Oferta[]> {
    return this.http.get('http://localhost:30/ofertas')
    .toPromise()
    .then((resposta: any)=> resposta.json())
  }
 
}