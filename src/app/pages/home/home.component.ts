import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IMAGES } from '../../../data';
import { HeaderComponent } from '../../core/components/header/header.component';

@Component({
  selector: 'app-home',
  imports: [
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,
    FontAwesomeModule,
    CommonModule,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  images = IMAGES;
}
