import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
import {GetAllModelResponse, ModelControllerService} from "../../../../shared/services/api";


@Component({
  standalone: true,
  imports: [],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelsListBaseComponent {
  @Input() initialSelectedModelId: number | null = null;
  @Output() selectModel = new EventEmitter<GetAllModelResponse | null>();

  models !: GetAllModelResponse[];
  selectedModel: GetAllModelResponse | null = null;
  initialSelectedModelIndex: number | null = null;

  constructor(
    private modelsService: ModelControllerService,
    protected change: ChangeDetectorRef) {}

  ngOnInit() {
    this.getModelsList()
  }

  getModelsList() {
    this.modelsService.getAllModels().subscribe((response) => {
      this.models = response;

      if (this.initialSelectedModelId) {
        this.selectedModel =
          this.models.find(
            (model) => model.id === this.initialSelectedModelId
          ) ?? null;
        this.initialSelectedModelIndex = this.models.findIndex(
          (model) => model.id === this.initialSelectedModelId
        );
      }
      this.change.markForCheck();
    });
  }

  onSelectModel(model: GetAllModelResponse) {
    this.selectedModel = this.selectedModel?.id !== model.id ? model : null;
    this.selectModel.emit(this.selectedModel);
  }

}
