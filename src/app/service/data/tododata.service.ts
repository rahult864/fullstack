import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root'
})
export class TododataService {

  constructor(private http:HttpClient) { }

retriveAllTodo(name){
 return this.http.get<Todo[]>(`http://localhost:8989/users/${name}/todos`)
}
retriveTodo(name,id){
  return this.http.get<Todo>(`http://localhost:8989/users/${name}/todos/${id}`)
 }

deleteTodo(name,id){
  return this.http.delete(`http://localhost:8989/users/${name}/todos/${id}`)
 }

 saveTodo(name,todo){
   if(todo.id!=-1){
  return this.http.put(`http://localhost:8989/users/${name}/todos`,todo)
}else{
  return this.http.post(`http://localhost:8989/users/${name}/todos`,todo)
}
 }
}
