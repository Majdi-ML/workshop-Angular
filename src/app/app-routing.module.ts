import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { ApartementComponent } from './apartement/apartement.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdatePComponent } from './update-p/update-p.component';
import { AddvoyageComponent } from './addvoyage/addvoyage.component';
import { ListvoyageComponent } from './listvoyage/listvoyage.component';

const routes: Routes = [
  {path:'list',component:ListvoyageComponent},
  {path:'home',component:HomeComponent},
  {path:'residence',component:ResidenceComponent},
  {path:'login',component:ReactiveFormComponent},
  {path:'addVoyage',component:AddvoyageComponent},
  //route par défaut
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'product/:id',component:DetailProductComponent},
  {path:'updateP/:id',component:UpdatePComponent},
  {path:'appartement/:id',component:ApartementComponent},
  //route not found
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
