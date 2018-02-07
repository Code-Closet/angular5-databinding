import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  public interval = 0;
  @Output() public  gameCounter = new EventEmitter<number>();
  private gameCounterGenerator;


  constructor() { }

  ngOnInit() {
  }

  startGame() {
    console.log('Game started');
    this.gameCounterGenerator= setInterval(() => {
      this.interval ++;
      this.gameCounter.emit(this.interval);
    },1000);
  }

  stopGame() {
    console.log('Game stopped');
    clearInterval(this.gameCounterGenerator);
  }
}
