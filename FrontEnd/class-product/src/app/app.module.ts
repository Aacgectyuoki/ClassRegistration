import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { RetrieveClassDetailsComponent } from './retrieve-class-details/retrieve-class-details.component';
import { DeleteByIdComponent } from './delete-by-id/delete-by-id.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RetrieveByIdComponent } from './retrieve-by-id/retrieve-by-id.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateClassComponent,
    RetrieveClassDetailsComponent,
    DeleteByIdComponent,
    UpdateDetailsComponent,
    RetrieveByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }