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


  // Controllers de validacao dos campos
  public addressValid: boolean;
  public numberValid: boolean;
  public complementValid: boolean;
  public formPagymentValid: boolean;

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(address: string): void {
    this.address = address
    
    if(this.address.length > 5){
        this.addressValid = true
    }else {
      this.addressValid = false
    }
  }

  public atualizaNumero(number: string): void {
    this.number = number

    if(this.number.length >0){
      this.numberValid = true
    }else{
      this.numberValid = false
    }
  }

  public atualizaComplemento(complement: string): void {
    this.complement = complement
    
    if(this.complement.length>0){
      this.complementValid = true
    }
  }

  public atualizaFormPayment(formPagyment: string): void {
    this.formPagyment = formPagyment
    
    if(this.formPagyment.length>0){
      this.formPagymentValid = true
    }else {
      this.formPagymentValid = false
    }
  }

}
