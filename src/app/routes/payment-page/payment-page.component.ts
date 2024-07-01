import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentPageComponent implements OnInit{ 
  
  constructor() {}

  ngOnInit(): void {
    // Menu Toggle Script
    const menuToggle = document.getElementById('menu-toggle');
    const wrapper = document.getElementById('wrapper');
    if (menuToggle && wrapper) {
      menuToggle.addEventListener('click', (event) => {
        event.preventDefault();
        wrapper.classList.toggle('toggled');
      });
    }

    // For highlighting activated tabs
    const tab1 = document.getElementById('tab1');
    const tab2 = document.getElementById('tab2');
    const tab3 = document.getElementById('tab3');
    const tabs = document.querySelectorAll('.tabs');

    if (tab1 && tab2 && tab3 && tabs) {
      tab1.addEventListener('click', () => {
        tabs.forEach(tab => {
          tab.classList.remove('active1');
          tab.classList.add('bg-light');
        });
        tab1.classList.add('active1');
        tab1.classList.remove('bg-light');
      });

      tab2.addEventListener('click', () => {
        tabs.forEach(tab => {
          tab.classList.remove('active1');
          tab.classList.add('bg-light');
        });
        tab2.classList.add('active1');
        tab2.classList.remove('bg-light');
      });

      tab3.addEventListener('click', () => {
        tabs.forEach(tab => {
          tab.classList.remove('active1');
          tab.classList.add('bg-light');
        });
        tab3.classList.add('active1');
        tab3.classList.remove('bg-light');
      });
    }
  }
}