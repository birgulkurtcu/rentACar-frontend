import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import {ModelsListBaseComponent} from "../models-list-base/models-list-base.component";
import {TableDirective} from "../../../../shared/directives/table.directive";
import {CommonModule} from "@angular/common";
import { ButtonComponent } from '../../../../shared/components/button/button.component';
import { RouterModule } from '@angular/router';
import { ModelControllerService } from '../../../../shared/services/api';


@Component({
  selector: 'app-models-list-table',
  standalone: true,
  imports: [
    TableDirective,
    CommonModule,
    ButtonComponent,
    RouterModule
  ],
  templateUrl: './models-list-table.component.html',
  styleUrl: './models-list-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModelsListTableComponent extends ModelsListBaseComponent{

  constructor(
    modelsService: ModelControllerService, 
    change: ChangeDetectorRef,
    private modelControllerService: ModelControllerService
  ){
    super(modelsService,change);
  }

  deleteModel(id: number) {
    this.modelControllerService.deleteModelById({ id }).subscribe({
      complete: () => {
        this.getModelsList();
      },
    });
  }

}
