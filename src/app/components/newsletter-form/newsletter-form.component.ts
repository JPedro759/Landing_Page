import { Component, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BtnPrimaryComponent } from '@components/btn-primary/btn-primary.component';
import { NewsletterService } from '../../services/newsletter.service';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule],
  providers: [NewsletterService],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss',
})
export class NewsletterFormComponent {
  newsLetterForms!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsLetterForms = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  onSubmit() {
    this.loading.set(true);

    if (this.newsLetterForms.valid) {
      this.service
        .sendData(
          this.newsLetterForms.value.name,
          this.newsLetterForms.value.email
        )
        .subscribe({
          next: () => {
            this.newsLetterForms.reset();
            this.loading.set(false);
          },
        });
    }
  }
}
