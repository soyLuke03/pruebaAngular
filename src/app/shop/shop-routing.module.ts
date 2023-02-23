import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { AddcategoriesComponent } from './addcategories/addcategories.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes = [
    {
        path: '', component: CategoriesComponent,
        children: [
            { path: 'add', component: AddcategoriesComponent },
            { path: 'products/:_id', component: ProductsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShopRoutingModule { }