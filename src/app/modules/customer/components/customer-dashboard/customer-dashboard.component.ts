import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NG_VALIDATORS, NgModel } from '@angular/forms';
import { NavItem, NavTitle, NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { TopbarComponent } from '../../../../shared/components/topbar/topbar.component';

@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [
    CommonModule, NavbarComponent, TopbarComponent, RouterModule,
  ],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomerDashboardComponent implements OnInit{

  

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
