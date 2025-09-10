import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

import { routes as productsRoute } from './products/products.routes'
import { routes as adminRoute } from './pages/admin/admin.routes';
import { ProductItemComponent } from './products/product-item/product-item.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AuthGuard } from './core/guards/auth.guard';

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
        children: [
            {
                path: 'update',
                component:ProductFormComponent
            },            ]
    },
    // utiliser cette route avec children pour faire apparaitre le composant enfant dans le composant parent (et pas de changement de page)
    // il est nécessaire d'ajouter <router-outlet /> dans le composant parent, là ou on veut afficher le composant enfant
    // {
    //     path: 'products',
    //     component: ProductsComponent,
    //     children: productsRoute,
    // },

    // Suppression pour passer en lazy loading
    // {
    //     path: 'admin',
    //     component: AdminComponent,
    //     children: adminRoute,
    //     canActivate: [AuthGuard]
    // },
    {
        path: 'admin',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./pages/admin/admin.routes').then(m => m.routes)
      },
    {
        path: '**',
        component: NotFoundComponent
    }

];
