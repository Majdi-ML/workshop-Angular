import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ApartementComponent } from './apartement/apartement.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePComponent } from './update-p/update-p.component';
import { TvCComponent } from './tv-c/tv-c.component';
import { MobileComponent } from './mobile/mobile.component';
import { ShowOneProdcutsComponent } from './show-one-prodcuts/show-one-prodcuts.component';
import { AddvoyageComponent } from './addvoyage/addvoyage.component';
import { ListvoyageComponent } from './listvoyage/listvoyage.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ResidenceComponent,
    NotFoundComponent,
    DetailProductComponent,
    ApartementComponent,
    ReactiveFormComponent,
    AddProductComponent,
    UpdatePComponent,
    TvCComponent,
    MobileComponent,
    ShowOneProdcutsComponent,
    AddvoyageComponent,
    ListvoyageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
