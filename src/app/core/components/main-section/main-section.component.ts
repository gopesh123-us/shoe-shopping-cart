import { Component } from '@angular/core';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductPhotosComponent } from './product-photos/product-photos.component';

@Component({
  selector: 'app-main-section',
  imports: [ProductPhotosComponent, ProductDetailsComponent],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css',
})
export class MainSectionComponent {}
