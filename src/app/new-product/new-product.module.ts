import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {NewProductRoutingModule} from './new-product-routing.module';
import {NewProductComponent} from './new-product.component';
import {NewProductListComponent} from './new-product-list/new-product-list.component';
import {NewProductDetailComponent} from './new-product-detail/new-product-detail.component';

@NgModule({
  declarations: [NewProductComponent,
    NewProductListComponent,
    NewProductDetailComponent],
  imports: [
    CommonModule,
    MatIconModule,
    NewProductRoutingModule
  ]
})
export class NewProductModule {
}
