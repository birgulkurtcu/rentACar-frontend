import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';

import {MenuComponent, MenuItem} from "../../../../shared/components/menu/menu.component";
//import {BrandListItemDto} from "../../models/brand-list-item-dto";
import {BrandControllerService, GetAllBrandResponse} from "../../../../shared/services/api";
import {BrandsService} from "../../services/brands.service";
import {BrandsListBaseComponent} from "../brands-list-base/brands-list-base.component";
//import {BrandsService} from "../../services/brands.service";

@Component({
  selector: 'app-brands-list-menu',
  standalone: true,
  imports: [
    MenuComponent
],
  templateUrl: './brands-list-menu.component.html',
  styleUrl: './brands-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandsListMenuComponent extends BrandsListBaseComponent implements OnInit {
  get brandsMenuItem(): MenuItem[] {
    console.log(this.brands);

    return (
      this.brands?.map((brand) => {
        return {
          label: brand.name!, // ' ! ' : null olmayan bir değer olduğunu belirtir.
          click: (_: MouseEvent) => this.onSelectBrand(brand),
        };
      }) ?? []
    );
  }
}
