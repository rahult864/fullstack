import { Component, OnInit } from '@angular/core';
import { TododataService } from '../service/data/tododata.service';
import { Router } from '@angular/router';


export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate:Date
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  todos:Todo[]
  message:string

  //   new Todo(1,'learn java',false,new Date()),
  //   new Todo(2,'learn rest',false,new Date()),
  //   new Todo(3,'learn angular',false,new Date()),
  //   new Todo(4,'learn security',false,new Date())
  //   // {id:1,description:' Anything we will  see later'},
  //   // {id:2,description:' Learn angular'},
  //   // {id:3,description:' became fullstack developer'}
  // ]
// todo={
//   id:1,
//   description:' Anything we will  see later'
// }
  constructor(private tododataService:TododataService ,
     private router:Router) { }

  ngOnInit() {
    this.refreshTodo()
  }
  refreshTodo(){
    this.tododataService.retriveAllTodo('in28minutes').subscribe(
      response=>{
        this.todos=response;
      }
    )
  }
  deleteTodo(id){
   this.tododataService.deleteTodo('in28minute',id).subscribe(
     response=>{
       console.log(response)
       this.message=`resource is deleted ${id} succesfully`
       this.refreshTodo()
     }
   )
  }
  updateTodo(id){
       this.router.navigate(['todo',id])
  }

  saveTodo(){
    this.router.navigate(['todo',-1])
  }


}
