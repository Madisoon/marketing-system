import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewProductService} from '../new-product.service';


@Component({
  selector: 'app-new-product-list',
  templateUrl: './new-product-list.component.html',
  styleUrls: ['./new-product-list.component.scss']
})
export class NewProductListComponent implements OnInit, AfterViewInit {

  newProduct: any;

  constructor(private router: Router, private newProductService: NewProductService) {
  }

  ngOnInit() {
    this.listNewProduct();
  }

  ngAfterViewInit(): void {
  }

  listNewProduct() {
    this.newProductService.listNewProduct().then(rep => {
      // @ts-ignore
      this.newProduct = rep;
    }).catch(rep => {
      console.log(rep);
    });
  }

  navGoodTextDetail(data) {
    this.router.navigate(['/newProduct/detail', {data: JSON.stringify(data)}]);
  }
}
