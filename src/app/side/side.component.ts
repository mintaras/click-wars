import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';
import {style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss'],
  animations: [
  trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity:0}),
      animate(250, style({opacity:1}))
    ]),
    transition(':leave', [   // :leave is alias to '* => void'
      animate(250, style({opacity:0}))
    ])
  ])
]
})
export class SideComponent implements OnInit {
  playerName: string;
  oponentName: string;
  oponentSideWidth = 50;
  sideWidth = 50;
  botInterval: any;
  message: string;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.openDialog();
    }, 1);
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(InputDialogComponent, {
      width: '250px',
      disableClose: true,
      data: {playerName: this.playerName}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.playerName = result.players[0].name;
      this.oponentName = result.players[1].name;
      this.startGame();
    });

  }

  startGame() {
    this.botInterval = setInterval(() => {
      if (this.sideWidth > 80) {
        this.sideWidth -= 15;
        this.oponentSideWidth += 15;
      } else {
        this.sideWidth -= 5;
        this.oponentSideWidth += 5;
      }
      this.finishGame();
    }, 750);
  }

  finishGame(): void {
    if (this.oponentSideWidth > 80) {
      this.message = 'You lose!';
      if (this.botInterval) {
        clearInterval(this.botInterval);
      }
    }
    if (this.sideWidth > 80) {
      this.message = 'You won!';
      if (this.botInterval) {
        clearInterval(this.botInterval);
      }
    }
  }

  onClick(): void {
    this.sideWidth += 5;
    this.oponentSideWidth -= 5;
    this.finishGame();
  }
}
