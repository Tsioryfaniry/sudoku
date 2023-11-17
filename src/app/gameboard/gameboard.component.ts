import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SudokuBoard } from '../shared/sudoku-board';
import { Cell } from '../shared/cell'

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss']
})
export class GameboardComponent implements OnInit {

    @Output('childMessage') public Message = new EventEmitter<string>()
  
  message!:string;
  board!: SudokuBoard;
  activeNumber!: number;

  isDone = false;
  messageEvent: any;

  constructor() {  }

  ngOnInit() {
    this.board = new SudokuBoard();
    while (this.board.isUndefined()) {
      this.board.initialize();
    }
  }

  reload() {
    this.board.initialize();
  }

  setActive(button:any, number: number): void {
    if (this.activeNumber == number) {
      this.activeNumber = number ;
    } else {
      this.activeNumber = number;
    }
  }

  onCellSelect(cell: Cell): void {
    if (this.activeNumber == -1 || cell.guess == this.activeNumber) {
      // cell.makeGuess(undefined);
    } else {
      cell.makeGuess(this.activeNumber);
    }

    if (document.getElementsByClassName('incomplete').length == 0) {
      this.isDone = true;
    }
  }
  sendMessage(){
    this.messageEvent.emit('Hello from child!');
  }
}