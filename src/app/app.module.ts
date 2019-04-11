import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatCardModule} from '@angular/material';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {GoodTextComponent} from './good-text/good-text.component';
import {NewProductComponent} from './new-product/new-product.component';
import {PraiseListComponent} from './praise-list/praise-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GoodTextComponent,
    NewProductComponent,
    PraiseListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
