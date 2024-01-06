import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DatailsProductComponent } from './components/datails-product/datails-product.component';

export const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"product/:id",
    component:DatailsProductComponent
  }
];
