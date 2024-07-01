import { Component } from '@angular/core';
import { NavbarComponent, NavItem, NavTitle } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { ButtonComponent } from "../../components/button/button.component";
import { RouterLink } from '@angular/router';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { AboutComponent } from '../../components/about/about.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterLink,
    CarouselComponent,
    TopbarComponent,
    AboutComponent,
    ContactComponent
  ],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.scss'
})
export class HomeLayoutComponent {

  navTitle: NavTitle = { text: 'Major Rental', routerLink: '/' }
  navItems: NavItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: 'mailto:birgulkurtcu@gmail.com' },
    { label: 'Management', link: '/management' },
    { label: 'Brands Management', link: '/management/brands' },
    { label: 'Models Management', link: '/management/models' },
    { label: 'Cars Management', link: '/management/cars' },
  ];

}
