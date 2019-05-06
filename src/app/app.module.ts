import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {MatCardModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {GoodTextComponent} from './good-text/good-text.component';
import {NewProductComponent} from './new-product/new-product.component';
import {PraiseListComponent} from './praise-list/praise-list.component';
import {ErrorComponent} from './common/error/error.component';
import {GoodTextDetailComponent} from './good-text/good-text-detail/good-text-detail.component';
import {PraiseListDetailComponent} from './praise-list/praise-list-detail/praise-list-detail.component';
import {NewProductDetailComponent} from './new-product/new-product-detail/new-product-detail.component';
import { NewProductModule } from './new-product/new-product.module';
import { GoodTextModule } from './good-text/good-text.module';
import { PraiseListModule } from './praise-list/praise-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodTextComponent,
    NewProductComponent,
    PraiseListComponent,
    ErrorComponent,
    GoodTextDetailComponent,
    PraiseListDetailComponent,
    NewProductDetailComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NewProductModule,
    GoodTextModule,
    PraiseListModule
  ],
  entryComponents: [NewProductDetailComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
