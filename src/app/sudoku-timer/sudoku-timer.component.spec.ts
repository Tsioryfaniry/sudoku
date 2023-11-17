import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SudokuTimerComponent } from './sudoku-timer.component';

describe('SudokuTimerComponent', () => {
  let component: SudokuTimerComponent;
  let fixture: ComponentFixture<SudokuTimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SudokuTimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SudokuTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
