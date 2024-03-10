import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '@components/btn-primary/btn-primary.component';
import { HeaderComponent } from '@components/header/header.component';
import { NewsletterFormComponent } from '@components/newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, NgOptimizedImage, BtnPrimaryComponent, NewsletterFormComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
