import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';
import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';
import translationEN from "../assets/i18n/en.json";
import translationES from "../assets/i18n/es.json";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer, TranslateDirective, TranslatePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private translate = inject(TranslateService)
  protected readonly title = signal('portfolio');
  constructor() {
    this.translate.setTranslation('en', translationEN);
    this.translate.setTranslation('es', translationES);

  }


}
