import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NewProductService} from '../new-product.service';

@Component({
  selector: 'app-new-product-detail',
  templateUrl: './new-product-detail.component.html',
  styleUrls: ['./new-product-detail.component.scss']
})
export class NewProductDetailComponent implements OnInit {
  newProductDetail: object = {};

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private newProductService: NewProductService) {
  }

  ngOnInit() {
    const valueName = 'value';
    this.newProductDetail = JSON.parse(this.activatedRoute.params[valueName].data);
    // @ts-ignore
    this.addEyeCount(this.newProductDetail.id);
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
