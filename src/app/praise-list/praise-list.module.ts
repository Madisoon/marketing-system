import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PraiseListRoutingModule} from './praise-list-routing.module';
import {PraiseListComponent} from './praise-list.component';
import {PraiseTableComponent} from './praise-table/praise-table.component';
import {PraiseListDetailComponent} from './praise-list-detail/praise-list-detail.component';

@NgModule({
  declarations: [PraiseListComponent, PraiseTableComponent, PraiseListDetailComponent],
  imports: [
    CommonModule,
    PraiseListRoutingModule
  ]
})
export class PraiseListModule {
}
