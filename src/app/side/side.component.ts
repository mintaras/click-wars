import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { InputDialogComponent } from '../input-dialog/input-dialog.component';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {
  sideWidth = 50;
  playerName: String;
  oponentName: String;
  oponentSideWidth = 50;

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
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.playerName = result;
      this.mockOponent();
    });
  }

  mockOponent() {
    setInterval(() => {
      this.sideWidth -= 5;
      this.oponentSideWidth += 5;
    }, 750);
  }

  onClick() {
    this.sideWidth += 5;
    this.oponentSideWidth -= 5;
  }
}
