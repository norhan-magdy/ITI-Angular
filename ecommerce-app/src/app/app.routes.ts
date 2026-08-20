import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title: 'Site Name',
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'Site Name',
  },
  {
    path: 'product-detailes/:id',
    component: ProductDetailsComponent,
    title: 'product-detailes',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'cart',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'register',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'login',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 Not Found',
  },
];
