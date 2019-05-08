import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PraiseListComponent} from './praise-list/praise-list.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'newProduct',
    loadChildren: './new-product/new-product.module#NewProductModule'
  },
  {
    path: 'goodText',
    loadChildren: './good-text/good-text.module#GoodTextModule'
  },
  {path: 'praiseList', component: PraiseListComponent},
  /*默认路由*/
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  /*404路由*/
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
