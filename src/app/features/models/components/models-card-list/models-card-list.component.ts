import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { BrandControllerService, CarControllerService, FuelControllerService, GetAllBrandResponse, GetAllCarResponse, GetAllFuelResponse, GetAllModelResponse, GetAllTransmissionResponse, ModelControllerService, TransmissionControllerService } from '../../../../shared/services/api';
import { ModelsListBaseComponent } from '../models-list-base/models-list-base.component';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { RouterLink } from '@angular/router';
import { CarsListBaseComponent } from '../../../cars/components/cars-list-base/cars-list-base.component';

@Component({
  selector: 'app-models-card-list',
  standalone: true,
  imports: [
    CommonModule,
    CardComponent, RouterLink, 
  ],
  templateUrl: './models-card-list.component.html',
  styleUrl: './models-card-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModelsCardListComponent extends ModelsListBaseComponent implements OnInit {
  @Input() brandId: number | null = null;
  imageUrl: any;

  get filteredModels(): GetAllModelResponse[] {
    let newList: GetAllModelResponse[] = this.models;

    
    if (this.brandId)
      newList = newList.filter((model) => model.brandId === this.brandId);

    return newList;
  }

  

  constructor(
    private modelControllerService: ModelControllerService,
    private brandsService: BrandControllerService,
    private fuelsService: FuelControllerService,
    private transmissionsService: TransmissionControllerService,
    private imageUrlService: ModelControllerService,
    //private dailyPriceService: CarControllerService,
    change: ChangeDetectorRef
  ) {
    super(modelControllerService, change);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getModelRelations();
  }

  brands: GetAllBrandResponse[] = [];
  fuels: GetAllFuelResponse[] = [];
  transmissions: GetAllTransmissionResponse[] = [];
  imageUrls: GetAllModelResponse[] = [];
  //dailyPrices: GetAllCarResponse[] = [];



  getModelRelations(): void {
    // Brand
    this.brandsService.getAllBrands().subscribe((brands) => {
      this.brands = brands;
      this.change.markForCheck();
    });

    // Fuel
    this.fuelsService.getAllFuels().subscribe((fuels) => {
      this.fuels = fuels;
      this.change.markForCheck();
    });

      //imageUrl
    this.imageUrlService.getAllModels().subscribe((imageUrls) =>{
      this.imageUrls = imageUrls;
      this.change.markForCheck();
    })
    
    // Transmission
    this.transmissionsService
      .getAllTransmissions()
      .subscribe((transmissions) => {
        this.transmissions = transmissions;
        this.change.markForCheck();
      })
      
    // Daily Price
    //this.dailyPriceService
     // .getAllCars()
     // .subscribe((dailyPrices) => {
     //   this.dailyPrices = dailyPrices;
    //    this.change.markForCheck();
    //  })
      
      ;

    
  }

  getModelCardText(model: GetAllModelResponse): string {
    return `Brand: ${
      this.brands.find((brand) => brand.id === model.brandId)?.name
    }, Fuel: ${
      this.fuels.find((f) => f.id === model.fuelId)?.name
    }, Transmission: ${
      this.transmissions.find((t) => t.id === model.transmissionId)?.name
    }, 
    `;
    
  }
}
