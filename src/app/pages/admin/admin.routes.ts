import { Routes } from "@angular/router";
import { ProductsComponent } from "../products/products.component";
import { routes as productsRoute } from '../../products/products.routes'
import { NotFoundComponent } from "../not-found/not-found.component";

export const routes: Routes = [
    {
        path: 'profil',
        component:NotFoundComponent
    },
    {
        path: 'settings',
        component: NotFoundComponent
    },
    {
        path: 'products',
        component: ProductsComponent,
        children: productsRoute,
    },
    
]