import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PraiseListComponent} from './praise-list.component';
import {PraiseTableComponent} from './praise-table/praise-table.component';
import {PraiseListDetailComponent} from './praise-list-detail/praise-list-detail.component';

const routes: Routes = [
  {
    path: '', component: PraiseListComponent, children: [
      {path: 'list', component: PraiseTableComponent},
      {path: 'detail', component: PraiseListDetailComponent},
      {path: '', redirectTo: 'list', pathMatch: 'full'},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PraiseListRoutingModule {
}
