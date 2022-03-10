import { Component, OnInit } from '@angular/core';
import { RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss']
})
export class DiretivasAtributosComponent implements OnInit {

  public valor: boolean = true;
  public altura: string ="fit-content";
  public backColor: string ="red";

  public nome: string="";
  public idade: any="";
  public list: Array<{nome: string, idade: number}> =[];
  public data = new Date;

 

  constructor() { }

  ngOnInit(): void {

    setInterval(()=>
    {
     if(this.valor){
        this.valor=false;
      }else{
        this.valor=true;
      }

      if(this.altura == "fit-content"){
        this.altura="50%";
        this.backColor="goldenrod";
      }else{
        this.altura="fit-content";
        this.backColor="red";
      }
    },2000)
  }

  public salvar(){
    if(this.nome!="" && this.idade!=""){
    this.list.push({nome:this.nome, idade:this.idade});
    this.nome ="";
    this.idade="";
    }else{
    alert("Algum dado foi preenchido incorretamente!");
    }
  }
  public onClickEventList(event: number){
    this.list.splice(event, 1)
  }

  public delet(){
    
  }
}
