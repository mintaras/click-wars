import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-input-dialog',
  templateUrl: './input-dialog.component.html',
  styleUrls: ['./input-dialog.component.scss']
})
export class InputDialogComponent implements OnInit {
    name: String;
    constructor(
      public dialogRef: MatDialogRef<InputDialogComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
    }

    onEnter(event) {
      if (event.keyCode == 13) {
        this.onNoClick();
      }
    }

    onNoClick(): void {
      this.dialogRef.close();
    }

}
