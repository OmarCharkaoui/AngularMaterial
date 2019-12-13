import { Component, OnInit } from '@angular/core';
import { MatSnackBar,MatDialog } from '@angular/material';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css']
})
export class SnackBarComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private _dialog: MatDialog ) { }

  ngOnInit() {
  }
  openSnackbar(msg,action) {
  this._snackBar.open(msg,action);
  }

  openDialog()
  {
  this._dialog.open(DialogExampleComponent);
  }


}
