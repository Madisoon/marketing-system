import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {GoodTextRoutingModule} from './good-text-routing.module';
import {GoodTextComponent} from './good-text.component';
import {GoodTextListComponent} from './good-text-list/good-text-list.component';
import {GoodTextDetailComponent} from './good-text-detail/good-text-detail.component';

@NgModule({
  declarations: [
    GoodTextComponent,
    GoodTextListComponent,
    GoodTextDetailComponent
  ],
  imports: [
    CommonModule,
    GoodTextRoutingModule,
    MatIconModule,
    MatChipsModule
  ]
})
export class GoodTextModule {
}
