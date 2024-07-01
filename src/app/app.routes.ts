import { Routes } from '@angular/router';
import {managementRoutes} from "./routes/management-page/management.routes";
import {NotFoundPageComponent} from "./routes/not-found-page/not-found-page.component";
import {homeRoutes} from "./routes/home-page/home.routes";
import { aboutRoutes } from './routes/about-page/about-routes';
import { loginRoutes } from './auth/components/login-page/login.routes';
import { signupRoutes } from './auth/components/signup-page/signup.routes';
import { AdminDashboardComponent } from './modules/admin/components/admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './modules/admin/admin/admin.component';

import { CustomerDashboardComponent } from './modules/customer/components/customer-dashboard/customer-dashboard.component';
import { paymentRoutes } from './routes/payment-page/payment.routes';
import { CustomerComponent } from './modules/customer/components/customer/customer.component';

export const routes: Routes = [
  ...homeRoutes,
  ...managementRoutes,
  ...aboutRoutes,
  ...loginRoutes,
  ...signupRoutes,
  ...paymentRoutes,
  
  {
    path: '', //path: '**'  -> wildwcards
    component: NotFoundPageComponent
  },
  {
    path:'admin',
    component:AdminComponent,
    children:[
      {path: 'dashboard', 
      component: AdminDashboardComponent,
      }
    ]
  },
  {
    path:'customer',
    component:CustomerComponent,
    children:[
      {path: 'dashboard', 
      component: CustomerDashboardComponent,
      }
    ]
  },

];
