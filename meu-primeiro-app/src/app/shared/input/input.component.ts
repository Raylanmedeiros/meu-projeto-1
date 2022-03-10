import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  public valor: number =1;
  public addValue: any;
  public contador: number = 0;
  public teste: any;

  public add(): void{
    this.addValue +=1;
  }

  public addd(): void{
    this.addValue=this.addValue;
  }

  public remove(){
    if (this.addValue>1){
    this.addValue -=1;
    }else{
      alert("Você deseja excluir esse item?");
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
