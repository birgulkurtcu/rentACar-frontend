import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CarsListTableComponent } from '../../../features/cars/components/cars-list-table/cars-list-table.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
  selector: 'app-management-cars-page',
  standalone: true,
  imports: [
    CommonModule,
    CarsListTableComponent,
    ButtonComponent,
    RouterModule
  ],
  templateUrl: './management-cars-page.component.html',
  styleUrl: './management-cars-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagementCarsPageComponent { }



