import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoriesComponent } from './addcategories/addcategories.component';
import { ProductsComponent } from './products/products.component';
import { ShopRoutingModule } from './shop-routing.module';
import { AccountService } from '../_services/account.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CategoriesComponent,
    AddcategoriesComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    FormsModule
  ],
  providers: [
    AccountService
  ]
})
export class ShopModule { }
