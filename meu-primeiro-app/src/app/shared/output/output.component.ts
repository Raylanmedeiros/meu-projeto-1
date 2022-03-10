import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Output() public enviarDados = new EventEmitter();

  public list: Array<{ nome: string, idade: number }> = [
    {nome: "Raylan", idade: 25},
    {nome: "Isabella", idade: 25},
    {nome: "Alexandre", idade: 20},

  ]

  constructor() { }

  ngOnInit(): void {
  }

  public getDados(event: number){
    this.enviarDados.emit(this.list[event]);
  }

 }

