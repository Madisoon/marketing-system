import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {PraiseListRoutingModule} from './praise-list-routing.module';
import {PraiseListComponent} from './praise-list.component';
import {PraiseTableComponent} from './praise-table/praise-table.component';
import {PraiseListDetailComponent} from './praise-list-detail/praise-list-detail.component';

@NgModule({
  declarations: [PraiseListComponent, PraiseTableComponent, PraiseListDetailComponent],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    PraiseListRoutingModule,
    MatButtonModule
  ]
})
export class PraiseListModule {
}
