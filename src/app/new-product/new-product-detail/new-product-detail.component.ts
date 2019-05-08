import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-product-detail',
  templateUrl: './new-product-detail.component.html',
  styleUrls: ['./new-product-detail.component.scss']
})
export class NewProductDetailComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  backPage() {
    this.router.navigate(['/newProduct/list']);
  }
}
