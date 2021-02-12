import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public address: string = '';
  public number: string = '';
  public complement: string = '';
  public formPagyment: string = '';

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(address: string): void {
    this.address = address
    console.log(this.address)
  }

  public atualizaNumero(number: string): void {
    this.number = number
    console.log(this.number)
  }

  public atualizaComplemento(complement: string): void {
    this.complement = complement
    console.log(this.complement)
  }

  public atualizaFormPayment(formPagyment: string): void {
    this.formPagyment = formPagyment
    console.log(this.formPagyment)
  }

}
