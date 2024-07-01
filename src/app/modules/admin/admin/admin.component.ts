import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NavItem, NavTitle, NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { HomeLayoutComponent } from '../../../shared/layouts/home-layout/home-layout.component';
import { StorageService } from '../../../auth/services/storage/storage.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavbarComponent,
    RouterLink
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {

  constructor(private router: Router){}

  navTitle : NavTitle = { text: 'Major Rental', routerLink: '/'}
  navItems : NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: 'mailto:birgulkurtcu@gmail.com' },
    { label: 'Management', link: '/management' },
    { label: 'Brands Management', link: '/management/brands' },
    { label: 'Models Management', link: '/management/models' },
    { label: 'Cars Management', link: '/management/cars' },
  ];
  
  logout(){
    StorageService.logout();
    this.router.navigateByUrl("/login")

  }


 }
