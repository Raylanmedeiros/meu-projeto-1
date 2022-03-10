import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

public nome: string="(nome)";
public idade: number=25;
public soma: number=23;

public checkedDisabled: boolean = false;

public imgSrc: string ="https://static.myfigurecollection.net/pics/encyclopedia/8006.jpg?rev=1622720291"
public imgTitle: string ="teste"

public position: {x: number, y: number} ={x: 0, y: 0}

  constructor() { }

  ngOnInit(): void {
  }

  public alertainfo(valor: any) {
    alert(valor);
  }

  public alertainfo2(valor2: MouseEvent) {
   console.log(valor2);
  }

  public mouseMoveTest(valor: MouseEvent){
    //console.log(valor);
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }


}
