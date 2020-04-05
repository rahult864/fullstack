import { Component, OnInit } from '@angular/core';
import { TododataService } from '../service/data/tododata.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
id:number
todo:Todo
  constructor(private tododataService:TododataService,
    private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.todo=new Todo(this.id,'',false,new Date())
    this.id=this.route.snapshot.params['id']
    if(this.id!=-1){
    this.tododataService.retriveTodo('in28minutes',this.id).subscribe(
      data=>this.todo=data
    )
    }
  }

  saveTodo(){
   this.tododataService.saveTodo('in28minutes',this.todo).subscribe(
    response=> {
console.log(response)
this.router.navigate(['todos'])
     }
   )
  }

}
