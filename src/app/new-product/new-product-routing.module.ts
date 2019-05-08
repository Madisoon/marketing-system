import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {NewProductComponent} from './new-product.component';
import {NewProductListComponent} from './new-product-list/new-product-list.component';
import {NewProductDetailComponent} from './new-product-detail/new-product-detail.component';

const routes: Routes = [
  {
    path: '', component: NewProductComponent, children: [
      {path: 'list', component: NewProductListComponent},
      {path: 'detail', component: NewProductDetailComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewProductRoutingModule {
}
