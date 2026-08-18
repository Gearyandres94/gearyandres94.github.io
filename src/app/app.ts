import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Footer } from './footer/footer';
import { TranslateService, TranslatePipe, TranslateDirective } from '@ngx-translate/core';


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
    this.translate.addLangs(['es', 'en'])
  }


}
