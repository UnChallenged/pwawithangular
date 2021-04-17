import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwawithangular';
  breakpoint: number;
  value = 'from business card demo';
  //public myAngularxQrCode: string = 'www.google.com';
  constructor(public dialog: MatDialog) {}
  openQRDialog() {

    this.dialog.open(DialogDataExampleDialog, {
      data: {
      }
    });
  }
  ngOnInit(): void {
    if (window.innerWidth <= 700) {
      this.breakpoint = 2
    }
    else if (window.innerWidth <= 1100) {
      this.breakpoint = 3
    }
    else {
      this.breakpoint = 3
    }
/*this.breakpoint = (window.innerWidth <= 400) ? 1 : 3;*/
  }
  onResize(event) {
    if (event.target.innerWidth <= 700) {
      this.breakpoint = 2
    }
    else if (event.target.innerWidth <= 1100) {
      this.breakpoint = 3
    }
    else {
      this.breakpoint = 3
    }
    //this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 3;
  }
}
@Component({
  selector: 'qr-dialog',
  templateUrl: 'qr-dialog.html',
})
export class DialogDataExampleDialog {
  public myAngularxQrCode: string = 'www.google.com';
  constructor() {}
}
