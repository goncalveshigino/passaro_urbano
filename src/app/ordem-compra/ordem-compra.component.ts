import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.services'

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
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

  //estados primitivos dos campos (pristine)
  public addressEstadoPrimitivo: boolean = true;
  public numberEstadoPrimivito: boolean = true;
  public complementEstadoPrimitivo: boolean = true;
  public formPagymentEstadoPrimitivo: boolean = true;

  //Controllar botao que confirma compra
  public formEstado: string = 'disabled';

  constructor( private ordemCompraService: OrdemCompraService) { 

  }

  ngOnInit() {

   this.ordemCompraService.efetivarCompra();
   
  }

  public atualizaEndereco(address: string): void {
    this.address = address

    this.addressEstadoPrimitivo = false
    
    if(this.address.length > 3){
        this.addressValid = true
    }else {
      this.addressValid = false
    }

    this.habilitaForm();
  }

  public atualizaNumero(number: string): void {
    this.number = number

    this.numberEstadoPrimivito = false

    if(this.number.length >0){
      this.numberValid = true
    }else{
      this.numberValid = false
    }

    this.habilitaForm();
  }

  public atualizaComplemento(complement: string): void {
    this.complement = complement

    this.complementEstadoPrimitivo = false
    
    if(this.complement.length>0){
      this.complementValid = true
    }else {
      this.complementValid = false
    }

    this.habilitaForm();
  }

  public atualizaFormPayment(formPagyment: string): void {
    this.formPagyment = formPagyment

    this.formPagymentEstadoPrimitivo = false
    
    if(this.formPagyment.length > 0){
      this.formPagymentValid = true
    }else {
      this.formPagymentValid = false
    }

    this.habilitaForm();
  }

  public habilitaForm(): void{
      if( this.addressValid === true && this.numberValid === true && this.formPagymentValid ===true){

        this.formEstado = '';
      }else{
        this.formEstado = 'disabled';
      }
  }

}
