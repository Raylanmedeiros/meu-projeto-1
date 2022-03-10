import { Component, DoCheck, OnInit } from '@angular/core';
import { first, last } from 'rxjs';

//interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || '[]');

constructor() { }

//Verifica se o valor checekd é atribuído a taskList
ngDoCheck(){
  this.setLocalStorage();
}

  //Deleta item por item
  public deleteItemTaskList(event: number)  {
    this.taskList.splice(event, 1);
  }

  //Deleta todos os item do Array
  public deleteAllTaskList()  {
    const confirm = window.confirm("Você realmente deseja deletar todas as tarefas?")
    if(confirm){
      this.taskList = [];
    }
  }

  //Valida se o campo foi alterado para vazio
  public validationIput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Ops, vejo que sua tarefa está vazia. deseja deletar?")

      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

  //Faz o "push" para tela
  public setEmitTaskList(event: string){
    this.taskList.push({task: event, checked: false})
  }

  public setLocalStorage (){
    if(this.taskList){
      this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
      localStorage.setItem("list", JSON.stringify(this.taskList));
    }
  }

}
