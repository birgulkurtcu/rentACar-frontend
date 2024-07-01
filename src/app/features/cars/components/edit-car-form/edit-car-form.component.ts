import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { CarControllerService } from '../../../../shared/services/api';

@Component({
  selector: 'app-edit-car-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonComponent,
  ],
  templateUrl: './edit-car-form.component.html',
  styleUrl: './edit-car-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditCarFormComponent implements OnInit {

  @Input() carId!: number;

  form!: FormGroup;
  formMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private carsService: CarControllerService,
    private change: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getCar();
  }

  createForm() {
    this.form = this.formBuilder.group({
      modelyear: ['', [Validators.required]],
      plate: ['', [Validators.required]],
      dailyprice: ['', [Validators.required]],
      state: ['', [Validators.required]],

    });
  }

  getCar() {
    this.carsService.getCarById({ id: this.carId }).subscribe((car) => {
      this.form.patchValue({
        plate: car.plate,
        dailyprice: car.dailyPrice,
        state: car.state,
      });
    });
  }

  edit() {
    this.carsService.updateCarById({
      id: this.carId, updateCarRequest: {
        plate: this.form.value.plate,
        dailyPrice: this.form.value.dailyPrice,
        state: this.form.value.state

      }
    }).subscribe({
      complete: () => {
        this.formMessage = 'Car updated succesfully.'
        this.change.markForCheck;

        setTimeout(() => {
          this.router.navigate(['/management', 'cars']);
        }, 2000);
      },
    });
  }
  onFormSubmit() {
    if (this.form.invalid) {
      this.formMessage = 'Please fill the form correctly';
      return;
    }
    this.edit();
  }
}
