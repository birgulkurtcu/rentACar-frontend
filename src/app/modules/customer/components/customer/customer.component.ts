import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TopbarComponent } from '../../../../shared/components/topbar/topbar.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from '../customer-dashboard/customer-dashboard.component';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [
    CommonModule, NavbarComponent, TopbarComponent, RouterModule, CustomerDashboardComponent
  ],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerComponent { }
