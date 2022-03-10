import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input() public title: string = "Olá mundo";

  constructor() { }

  ngOnInit(): void {
    //this.functionNr1();
  }

  ngOnChanges(): void {
    alert("Foi alterado com sucesso.");
  }

 /* functionNr1() {     
    console.log("função iniciando o setTimeout no código");
    setTimeout (() => {
        this.title="Iae champs";
         console.log("Fim do timeout");
      }, 5000);
      console.log("Função encerrando o setTimeout no código");
 
  }*/

}
