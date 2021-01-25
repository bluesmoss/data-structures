import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-queues',
  templateUrl: './queues.component.html',
  styleUrls: ['./queues.component.scss']
})
export class QueuesComponent implements OnInit {

  songs = ['Circles', 'Magic', 'Bichota'];
  newSong: string = '';
  message: string = '';
  showMessage: boolean = false;
  playerMessage: string = 'There is no song playing.'


  constructor() { }

  ngOnInit(): void {
  }

  enqueue(){
    this.showMessage = false;

    if(this.newSong.trim() != ''){
      this.songs.push(this.newSong);
      this.newSong = '';
    } else {
      this.message = "The new song can not be empty"
      this.showMessage = true;
    }
  }

  dequeue(){
    this.playerMessage = `The queue is empty, add more songs`;
    if (!this.isEmpty()) {
      let currentSong = this.songs.shift();
      this.playerMessage = `Playing  ${currentSong}`
    }
  }

  isEmpty(){
    return this.songs.length == 0;
  }

  verifyEmpty(){
    this.message = `The queue is empty`;
    if (!this.isEmpty()) {
      this.message = `The queue is not empty, its size is: ${this.songs.length}`;
    }
    this.showMessage = true;    
  }

  getTop(){
    this.message = `The queue is empty`;
    if (!this.isEmpty()) {
      let top = this.songs[this.songs.length -1];
      this.message = `The element at the top is: ${top}`;
    }
    this.showMessage = true;
  }

  getBottom(){
    this.message = `The queue is empty`;
    if (!this.isEmpty()) {
      let bottom = this.songs[0];
      this.message = `The element at the top is: ${bottom}`;
    }
    this.showMessage = true;
  }


  getSize(){
    this.message = `The queue is empty`;
    if (!this.isEmpty()) {
      this.message = `The size of the queue is: ${this.songs.length}`;
    }
    this.showMessage = true;
  }


  hideMessage(){
    this.message = ``;
    this.showMessage = false;
  }  

}
