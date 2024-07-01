import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';
import { RouterLink } from '@angular/router';
import { CarsListBaseComponent } from '../cars-list-base/cars-list-base.component';
import { CarControllerService, GetAllCarResponse } from '../../../../shared/services/api';
import { BrandsListBaseComponent } from '../../../brands/components/brands-list-base/brands-list-base.component';
import { CarsListTableComponent } from '../cars-list-table/cars-list-table.component';

@Component({
  selector: 'app-cars-list-menu',
  standalone: true,
  imports: [
    CommonModule,CardComponent,RouterLink, CarsListTableComponent
  ],
  templateUrl: './cars-list-menu.component.html',
  styleUrl: './cars-list-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListMenuComponent extends CarsListBaseComponent implements OnInit {
  @Input() carId: number | null = null;
  imageUrl: any;

  get filteredCars(): GetAllCarResponse[] {
    let newList: GetAllCarResponse[] = this.cars;

    if (this.carId)
      newList = newList.filter((car) => car.id === this.carId);
    return newList;
  }

  constructor(
    private carControllerService: CarControllerService,
    private modelYearsService: CarControllerService,
    private platesService: CarControllerService,
    private dailyPricesService: CarControllerService,
    private statesService: CarControllerService,
    change: ChangeDetectorRef
  ) {
    super(carControllerService, change);
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.getCarRelations();
  }
  id: GetAllCarResponse[] = [];
  modelYears: GetAllCarResponse[] = [];
  plates: GetAllCarResponse[] = [];
  dailyPrices: GetAllCarResponse[] = [];
  states: GetAllCarResponse[] = [];

  getCarRelations(): void {

    this.carControllerService.getAllCars().subscribe((cars) => {
      this.cars = cars;
      this.change.markForCheck();
    });

    this.platesService.getAllCars().subscribe((plates) => {
      this.plates = plates;
      this.change.markForCheck();
    });

    
    this.dailyPricesService.getAllCars().subscribe((dailyPrices) =>{
      this.dailyPrices = dailyPrices;
      this.change.markForCheck();
    })

    this.modelYearsService.getAllCars().subscribe((modelYears) =>{
      this.modelYears = modelYears;
      this.change.markForCheck();
    })
    
  
    this.statesService.getAllCars().subscribe((states) => {
        this.states = states;
        this.change.markForCheck();
      });

    
  }

  getCarCardText(car: GetAllCarResponse): string {
    return `Car: ${
      this.cars.find((car) => car.id === car.id)?.id
    }, ModelYear: ${
      car.modelYear
    }, Plate: ${
      car.plate
    }, Price: ${
      car.dailyPrice
    }, State: ${
      car.state
    }, `;
  }
}

