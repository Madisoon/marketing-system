import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {GoodTextComponent} from './good-text/good-text.component';
import {NewProductComponent} from './new-product/new-product.component';
import {PraiseListComponent} from './praise-list/praise-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'goodText', component: GoodTextComponent},
  {path: 'newProduct', component: NewProductComponent},
  {path: 'praiseList', component: PraiseListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
