import { Routes } from "@angular/router";
import { PaymentPageComponent } from "./payment-page.component";

export const paymentRoutes: Routes = [
    {
      path: 'payment',
      pathMatch: 'full',
      component: PaymentPageComponent,
  
    },
  
  ];
  