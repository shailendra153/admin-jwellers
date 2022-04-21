import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddProductComponent } from './add-product/add-product.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SigninComponent } from './signin/signin.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path:"add-category",component:AddCategoryComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"view-category",component:ViewCategoryComponent},
  {path:"view-product",component:ViewProductComponent},
  {path:"customer-list",component:CustomerListComponent},
  {path:"sign-in",component:SigninComponent},
  {path:"update-category",component:UpdateCategoryComponent},
  {path:"update-product",component:UpdateProductComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
