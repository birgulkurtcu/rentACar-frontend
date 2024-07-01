import {Routes} from "@angular/router";
import {ManagementPageComponent} from "./management-page.component";
import {authGuard} from "../../shared/guards/auth.guard";
import {ManagementBrandsPageComponent} from "./management-brands-page/management-brands-page.component";
import { ManagementCreateBrandPageComponent } from "./management-brands-page/management-create-brand-page/management-create-brand-page.component";
import { ManagementEditBrandPageComponent } from "./management-brands-page/management-edit-brand-page/management-edit-brand-page.component";
import { ManagementModelsPageComponent } from "./management-models-page/management-models-page.component";
import { ManagementCreateModelPageComponent } from "./management-models-page/management-create-model-page/management-create-model-page.component";
import { ManagementEditModelPageComponent } from "./management-models-page/management-edit-model-page/management-edit-model-page.component";
import { Component } from "@angular/core";
import { ManagementCarsPageComponent } from "./management-cars-page/management-cars-page.component";
import { ManagementCreateCarPageComponent } from "./management-cars-page/management-create-car-page/management-create-car-page.component";
import { ManagementEditCarPageComponent } from "./management-cars-page/management-edit-car-page/management-edit-car-page.component";

export const managementRoutes: Routes = [
  {
    path: 'management',
    canActivate: [authGuard], //angular guards
    data: { // route'a özel veri tutma
      requiredRoles: ['admin'],
    },
    component: ManagementPageComponent,
    children: [
      {
        path: 'brands', //management/brands
        component: ManagementBrandsPageComponent,
      },
      {
        path: 'brands/create',
        component: ManagementCreateBrandPageComponent
      },
      {
        path: 'brands/edit/:brandId', 
        component: ManagementEditBrandPageComponent
      },
      
      {
        path:'models',
        component: ManagementModelsPageComponent
      },
      {
        path: 'models/create',
        component: ManagementCreateModelPageComponent
      },
      {
        path: 'models/edit/:modelId', 
        component: ManagementEditModelPageComponent
      },
      {
        path: 'cars', 
        component: ManagementCarsPageComponent
      },
      {
        path: 'cars/create',
        component: ManagementCreateCarPageComponent
      },
      {
        path: 'cars/edit/:brandId', 
        component: ManagementEditCarPageComponent
      },

    ],
  },
];
