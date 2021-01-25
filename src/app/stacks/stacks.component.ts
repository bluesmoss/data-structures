import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stacks',
  templateUrl: './stacks.component.html',
  styleUrls: ['./stacks.component.scss']
})
export class StacksComponent implements OnInit {

  items = ['blue', 'red', 'green'];
  newItem: string = '';
  message: string = '';
  showMessage: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  push(){
    this.showMessage = false;

    if(this.newItem.trim() != ''){
      this.items.push(this.newItem);
      this.newItem = '';
    } else {
      this.message = "The new element cannto be empty"
      this.showMessage = true;
    }
  }

  pop(){
    this.items.pop();
  }

  isEmpty(){
    return this.items.length == 0;
  }

  verifyEmpty(){
    this.message = `The stack is empty`;
    if (!this.isEmpty()) {
      this.message = `The stack is not empty, its size is: ${this.items.length}`;
    }
    this.showMessage = true;    
  }

  getTop(){
    this.message = `The stack is empty`;
    if (!this.isEmpty()) {
      let top = this.items[this.items.length -1];
      this.message = `The element at the top is: ${top}`;
    }
    this.showMessage = true;
  }

  getBottom(){
    this.message = `The stack is empty`;
    if (!this.isEmpty()) {
      let bottom = this.items[0];
      this.message = `The element at the top is: ${bottom}`;
    }
    this.showMessage = true;
  }


  getSize(){
    this.message = `The stack is empty`;
    if (!this.isEmpty()) {
      this.message = `The size of the stack is: ${this.items.length}`;
    }
    this.showMessage = true;
  }


  hideMessage(){
    this.message = ``;
    this.showMessage = false;
  }

}
