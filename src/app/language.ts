import { inject, Service } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Service()
export class Language {

  private translate = inject(TranslateService);

  changeLanguage(language: string) {

    switch (language) {
      case ('en'): this.translate.use('en')
        break;
      case ('es'): this.translate.use('es');
        break

    }
    console.log(this.translate);

  }
}
