import { Routes } from "@angular/router";
import { ProductsComponent } from "../products/products.component";
import { routes as productsRoute } from '../../products/products.routes'
import { NotFoundComponent } from "../not-found/not-found.component";
import { AdminComponent } from "./admin.component";

export const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
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
    }
];