import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {HomeLayoutComponent} from "../../shared/layouts/home-layout/home-layout.component";
import {ButtonComponent} from "../../shared/components/button/button.component";
import {BrandsListMenuComponent} from "../../features/brands/components/brands-list-menu/brands-list-menu.component";
//import {BrandListItemDto} from "../../features/brands/models/brand-list-item-dto";
import {ActivatedRoute, Router} from "@angular/router";
import {GetAllBrandResponse} from "../../shared/services/api";
import { CommonModule } from '@angular/common';
import { ModelsCardListComponent } from '../../features/models/components/models-card-list/models-card-list.component';
import { CarouselComponent } from '../../shared/components/carousel/carousel.component';
import { AboutComponent } from '../../shared/components/about/about.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { ContactComponent } from '../../shared/components/contact/contact.component';
import { TopbarComponent } from '../../shared/components/topbar/topbar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
    ButtonComponent,
    BrandsListMenuComponent,
    ModelsCardListComponent,
    CarouselComponent,
    AboutComponent,
    FooterComponent,
    ContactComponent,
    TopbarComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit{
  selectedBrandId: number | null = null;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getSelectedBrandIdFromRoute();
  }

  private getSelectedBrandIdFromRoute() {
    this.route.queryParams.subscribe((params) => {
      if(
        params['brandId'] &&
        this.selectedBrandId !== Number.parseInt(params['brandId'])
      )
        this.selectedBrandId = Number.parseInt(params['brandId']);
    });
  }

  onSelectBrand(selectedBrand: GetAllBrandResponse | null){
    this.selectedBrandId = selectedBrand?.id ?? null;

    if(this.selectedBrandId !== null)
      this.router.navigate([''], {
        queryParams: {
          brandId: this.selectedBrandId,
        },
      });
    else this.router.navigate(['']);
  }


}
