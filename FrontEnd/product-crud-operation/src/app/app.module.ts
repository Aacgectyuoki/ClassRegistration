import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { RetrieveProductComponent } from './retrieve-product/retrieve-product.component';
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';
import { UpdateProductPriceComponent } from './update-product-price/update-product-price.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RetrieveByIdComponent } from './retrieve-by-id/retrieve-by-id.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateClassComponent,
    RetrieveProductComponent,
    DeleteByIdComponent,
    UpdateProductPriceComponent,
    RetrieveByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }