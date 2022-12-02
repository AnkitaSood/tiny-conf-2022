import {enableProdMode, importProvidersFrom} from '@angular/core';
import {environment} from './environments/environment';
import {AppComponent} from "./app/app.component";
import {bootstrapApplication} from "@angular/platform-browser";
import {ProductListComponent} from "./app/product-list/product-list.component";
import {provideRouter, Route} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

if (environment.production) {
    enableProdMode();
}

const routes: Route[] = [
    {path: 'products-list', component: ProductListComponent},
    {
        path: 'products/:productId', loadComponent: () => import('./app/product-details/product-details.component')
            .then(c => c.ProductDetailsComponent)
    },
    {
        path: 'cart', loadComponent: () => import('./app/cart/cart.component')
            .then(c => c.CartComponent)
    },
    {
        path: 'shipping', loadComponent: () => import('./app/shipping/shipping.component')
            .then(c => c.ShippingComponent)
    },
    {
        path: 'show-docs',
        outlet: 'help',
        loadComponent: () => import('./app/help-docs/help-docs.component')
            .then(c => c.HelpDocsComponent),
    },
    {
        path: 'show-image',
        outlet: 'help',
        loadComponent: () => import('./app/help-image/help-image.component')
            .then(c => c.HelpImageComponent)
    },
    {
        path: '**',
        redirectTo: 'products-list',
        pathMatch: 'full',
    },
];

bootstrapApplication(AppComponent, {
        providers: [importProvidersFrom(HttpClientModule),
            provideRouter(routes)]
    }
);
