import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-new-product-detail',
  templateUrl: './new-product-detail.component.html',
  styleUrls: ['./new-product-detail.component.scss']
})
export class NewProductDetailComponent implements OnInit {
  newProductDetail: object;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    const valueName = 'value';
    this.newProductDetail = JSON.parse(this.activatedRoute.params[valueName].data);
  }

  backPage() {
    this.router.navigate(['/newProduct/list']);
  }
}
