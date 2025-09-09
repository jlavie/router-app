import { Routes } from "@angular/router";
import { ProductItemComponent } from "./product-item/product-item.component";
export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'prefix'
    },    
    {
        path: ':productId',
        component:ProductItemComponent
    },    
]