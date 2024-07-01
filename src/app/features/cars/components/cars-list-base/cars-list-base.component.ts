import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { CarControllerService, GetAllCarResponse } from '../../../../shared/services/api';


@Component({
  selector: 'app-cars-list-base',
  standalone: true,
  imports: [],
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarsListBaseComponent { 

  @Input() initialSelectedCarId: number | null = null;
  @Output() selectCar = new EventEmitter<GetAllCarResponse | null>();

  cars !: GetAllCarResponse[];
  selectedCar: GetAllCarResponse | null = null;
  initialSelectedCarIndex: number | null = null;

  constructor(
    public carsService: CarControllerService,
    protected change: ChangeDetectorRef) {}

  ngOnInit() {
    this.getCarsList()
  }

  getCarsList() {
    this.carsService.getAllCars().subscribe((response) => {
      this.cars = response;

      if (this.initialSelectedCarId) {
        this.selectedCar =
          this.cars.find(
            (car) => car.id === this.initialSelectedCarId
          ) ?? null;
        this.initialSelectedCarIndex = this.cars.findIndex(
          (car) => car.id === this.initialSelectedCarId
        );
      }
      this.change.markForCheck();
    });
  }

  onSelectCar(car: GetAllCarResponse) {
    this.selectedCar = this.selectedCar?.id !== car.id ? car : null;
    this.selectCar.emit(this.selectedCar);
  
  }

}
