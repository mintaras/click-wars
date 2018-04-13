import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { GameService } from '../game.service';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss'],
  providers: [GameService]
})
export class InputDialogComponent implements OnInit {

    name: string;
    nameEntered: boolean = false;

    constructor(
      public dialogRef: MatDialogRef<InputDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any,
      private gs: GameService
    ) { }

    ngOnInit() {
    }

    onEnter(event) {
      if (event.keyCode == 13 && this.name.length > 2) {
        this.nameEntered = true;
        this.gs.createPlayer(this.name);
        this.waitOponent();
      }
    }

    waitOponent() {
      setTimeout(() => {
        this.initGame();
      }, 2000);
    }

    initGame() {
      this.dialogRef.close({
        players: this.gs.getPlayers()
      });
    }

}
