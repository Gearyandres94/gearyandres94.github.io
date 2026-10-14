import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Language } from '../language';

@Component({
  selector: 'app-nav',
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  langService = inject(Language)
  lang = new FormControl('english')
  changeLanguage(language: string) {
    this.langService.changeLanguage(language)
  }
}
