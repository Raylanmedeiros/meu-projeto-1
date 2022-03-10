import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public condition: boolean = true;
  public conditionClick: boolean = true;
  public nomeCad: string ="";
  public idadeCad: any;
  
  public list: Array<{ nomeCad: string, idadeCad: any}> = [
    {nomeCad: "Raylan Medeiros", idadeCad: 25},
    {nomeCad: "Isabella Sotero", idadeCad: 25},
    {nomeCad: "Maria de Lolla", idadeCad: 1}
  ];
  
  public upper():any{
    this.nomeCad=this.nomeCad.toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {

setInterval(()=>{
  if(this.condition){
    this.condition=false;
  }else{
    this.condition=true;
    }
  }, 2000);

}
public onClick() {
  if (this.conditionClick){
    this.conditionClick=false;
  }else{
   this.conditionClick=true;
  }
}

public onClickAddList(){
  this.list.push({nomeCad:this.nomeCad, idadeCad:this.idadeCad});
}

public onClickEventList(event: number){
  this.list.splice(event, 1)
}

}
