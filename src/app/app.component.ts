import { Component } from '@angular/core';

interface todoItem {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class TodoComponent {
  title = 'TODOList';
  searchText: string;
  todoInput: string;
  todoList: todoItem[] = [
    {task: 'Walk the dog.', completed: false},
    {task: 'Go to the store.', completed: true},
    {task: 'Get gas.', completed: false},
    {task: 'Wash the car.', completed: false},
    {task: 'Pick up dry cleaning.', completed: true},
  ];

  addTodoItem = () => {
    const newItem = {
      task: this.todoInput,
      completed: false
    };
    this.todoList.push(newItem);
    this.todoInput = null;
  };
  
  completeTodoItem = (arrayIndex) => {
    this.todoList[arrayIndex].completed = true;
  };

  deleteTodoItem = (arrayIndex) => {
    this.todoList.splice(arrayIndex, 1);
  };


}
