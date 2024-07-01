import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient} from "@angular/common/http";
import {provideApiServices} from "./shared/services/api/providers/api-services-provider";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(),
    provideApiServices(),
  ]
};
