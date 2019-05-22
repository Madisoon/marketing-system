import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewProductService} from '../new-product.service';

@Component({
  selector: 'app-new-product-detail',
  templateUrl: './new-product-detail.component.html',
  styleUrls: ['./new-product-detail.component.scss']
})
export class NewProductDetailComponent implements OnInit {
  newProductId = '';
  newProductDetail: object = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private newProductService: NewProductService) {
  }

  ngOnInit() {
    const valueName = 'value';
    this.newProductId = this.activatedRoute.params[valueName].data;
    // @ts-ignore
    this.getNewProductById(this.newProductId);
    this.addEyeCount(this.newProductId);
  }

  getNewProductById(id) {
    this.newProductService.getNewProductById(id).then((rep) => {
      this.newProductDetail = rep;
    });
  }

  addEyeCount(id) {
    this.newProductService.addEyeCount(id).then((rep) => {
      console.log(rep);
    });
  }

  backPage() {
    history.go(-1);
  }
}
