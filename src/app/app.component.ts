import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Guess the Number!';
  tries=0;
  numberToCheck:number;
  playerChoice: number;
  secretNumber = Math.floor(Math.random() * 100 + 1 );

  constructor(){
    console.log("Your magic number might be "+this.secretNumber + "...");
  }

  checkNumber(event){
  	 this.tries++;
  	 this.playerChoice = this.numberToCheck;
  }

}
