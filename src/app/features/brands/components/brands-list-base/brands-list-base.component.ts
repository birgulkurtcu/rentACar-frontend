import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {GetAllBrandResponse} from "../../../../shared/services/api";
import {BrandsService} from "../../services/brands.service";


@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BrandsListBaseComponent {
  @Input() initialSelectedBrandId: number | null = null;
  @Output() selectBrand = new EventEmitter<GetAllBrandResponse | null>();

  brands !: GetAllBrandResponse[];
  selectedBrand: GetAllBrandResponse | null = null;
  initialSelectedBrandIndex: number | null = null;

  constructor(
    private brandsService: BrandsService,
    private change: ChangeDetectorRef) {}

  ngOnInit() {
    this.getBrandsList()
  }

  getBrandsList() {
    this.brandsService.getBrands().subscribe((response) => {
      this.brands = response;

      if (this.initialSelectedBrandId) {
        this.selectedBrand =
          this.brands.find(
            (brand) => brand.id === this.initialSelectedBrandId
          ) ?? null;
        this.initialSelectedBrandIndex = this.brands.findIndex(
          (brand) => brand.id === this.initialSelectedBrandId
        );
      }
      this.change.markForCheck();
    });
  }

  onSelectBrand(brand: GetAllBrandResponse) {
    this.selectedBrand = this.selectedBrand?.id !== brand.id ? brand : null;
    this.selectBrand.emit(this.selectedBrand);
  
  }

}
