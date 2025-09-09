import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { routes as productsRoute } from './products/products.routes'
import { ProductItemComponent } from './products/product-item/product-item.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component:HomeComponent
    },
    {
        path: 'products',
        component: ProductsComponent,
    },
    {
        path: 'products/:productId',
        component: ProductItemComponent,
    },
    {
        path: '**',
        component: NotFoundComponent
    }

];
