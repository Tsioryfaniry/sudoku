import { Component, OnInit, Input } from '@angular/core';
import { Timer } from '../shared/timer';
import { Subscription, interval } from 'rxjs';


@Component({
  selector: 'app-sudoku-timer',
  templateUrl: './sudoku-timer.component.html',
  styleUrls: ['./sudoku-timer.component.scss']
})
export class SudokuTimerComponent implements OnInit {

  @Input() isDone = false;
  timer!: Timer;
  timerDisplay!: string;
  sub: Subscription = new Subscription;

  constructor() { }

  ngOnInit() {
    this.timer = new Timer();
    this.sub = interval(1000).subscribe(x => {
      this.timerDisplay = this.timer.asMinutesColonSeconds();
      if (this.isDone) {
        this.timer.finish();
        this.sub.unsubscribe();
      }
    });
  }

}