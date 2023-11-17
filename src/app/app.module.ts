import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameboardComponent } from './gameboard/gameboard.component';
import { SudokuTimerComponent } from './sudoku-timer/sudoku-timer.component';

@NgModule({
  declarations: [
    AppComponent,
    GameboardComponent,
    SudokuTimerComponent
  ],
  imports: [
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
