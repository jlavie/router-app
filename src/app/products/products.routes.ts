import { Routes } from "@angular/router";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductFormComponent } from "./product-form/product-form.component";

export const routes: Routes = [
    {
        path: ':productId',
        component: ProductItemComponent,
        children: [
            {
                path: 'update',
                component:ProductFormComponent
            },            
        ]
    }, 
]