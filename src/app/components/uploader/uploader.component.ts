import { NgIf } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-uploader',
  standalone: true,
  imports: [NgIf],
  templateUrl: './uploader.component.html',
  styleUrl: './uploader.component.scss',
})
export class UploaderComponent {
  imageSrc = signal<string>('');

  uploadImage(event: Event) {
    const uploader = event.target as HTMLInputElement;
    if (uploader.files) {
      const uploadedImage = uploader.files[0];
      const imageURL = URL.createObjectURL(uploadedImage);
      this.imageSrc.set(imageURL);
    }
  }

  removeImage() {
    this.imageSrc.set('');
  }
}
