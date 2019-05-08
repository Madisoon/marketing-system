import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {GoodTextListComponent} from './good-text-list/good-text-list.component';
import {GoodTextDetailComponent} from './good-text-detail/good-text-detail.component';
import {GoodTextComponent} from './good-text.component';

const routes: Routes = [
  {
    path: '', component: GoodTextComponent, children: [
      {path: 'list', component: GoodTextListComponent},
      {path: 'detail', component: GoodTextDetailComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodTextRoutingModule {
}
