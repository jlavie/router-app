import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { routes as productsRoute } from './products/products.routes'

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
        children: productsRoute,
    },
    {
        path: '**',
        component: NotFoundComponent
    }

];
