import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import {BrandsListBaseComponent} from "../brands-list-base/brands-list-base.component";
import {TableDirective} from "../../../../shared/directives/table.directive";
import {CommonModule} from "@angular/common";
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { BrandControllerService } from '../../../../shared/services/api';
import { BrandsService } from '../../services/brands.service';


@Component({
  selector: 'app-brands-list-table',
  standalone: true,
  imports: [
    TableDirective,
    CommonModule,
    ButtonComponent,
    RouterModule
  ],
  templateUrl: './brands-list-table.component.html',
  styleUrl: './brands-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsListTableComponent extends BrandsListBaseComponent{

  constructor(
    brandsService: BrandsService, 
    change: ChangeDetectorRef,
    private brandControllerService: BrandControllerService
  ){
    super(brandsService,change);
  }

  deleteBrand(id: number) {
    this.brandControllerService.deleteBrandById({ id }).subscribe({
      complete: () => {
        this.getBrandsList();
      },
    });
  }

}
