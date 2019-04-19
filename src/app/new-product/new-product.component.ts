import {AfterViewInit, Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewProductDetailComponent} from './new-product-detail/new-product-detail.component';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit, AfterViewInit {

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }

  openDetail() {
    const dialogRef = this.dialog.open(NewProductDetailComponent, {
      height: '1000px',
      width: '1500px',
    });
  }

}
