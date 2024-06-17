import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { DetailProductComponent } from './components/detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    CardProductComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
