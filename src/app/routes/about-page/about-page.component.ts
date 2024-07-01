import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeLayoutComponent } from '../../shared/layouts/home-layout/home-layout.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    CommonModule,
    HomeLayoutComponent,
  ],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutPageComponent { }
