import { Component, input, output } from '@angular/core';

type BtnVariants = 'primary' | 'secondary';

@Component({
  selector: 'app-btn-primary',
  imports: [],
  templateUrl: './btn-primary.component.html',
  styleUrl: './btn-primary.component.scss',
})
export class BtnPrimaryComponent {
  btnText = input<string>();
  disabled = input<boolean>();
  loading = input<boolean>();
  variant = input<BtnVariants>('primary');

  submitt = output();

  onSubmit() {
    this.submitt.emit();
  }
}
