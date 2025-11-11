import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-benefit-card',
  imports: [NgOptimizedImage],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.scss',
})
export class BenefitComponent {
  imgPath = input('img-path');
  cardTitle = input('card-title');
  cardDescription = input('card-description');
}
