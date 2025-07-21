import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class MetatagService {

  private readonly platform_id = inject(PLATFORM_ID);

  constructor(private meta: Meta, private title: Title) { }

  updateMetaTags(page: string | null = null) {
    // get current language from the url
    // if (!isPlatformBrowser(this.platform_id)) {
    //   return;
    // }
    console.log("Current page: ", page);

    if (window.location.pathname.includes('/bg/')) {
      this.setBulgarianTitle(page);
    } else {
      this.setEnglishTitle(page);
    }

    this.meta.updateTag({ name: 'description', content: 'DenixLabs е мост между науката и бизнеса. Създаваме съвременни и интелигентни системи с изкуствен интелект, които помагат да вземате информирани решения и да автоматизирате рутинни задачи.' });
    this.meta.updateTag({ name: 'keywords', content: 'Изкуствен интелект, машинно обучение, невронни мрежи, дълбоко обучение, роботика, автоматизация, бизнес процеси, бизнес анализ, бизнес интелигентност, бизнес интелигенция, бизнес интелигентно приложение, бизнес интелигентност софтуерна платформа, бизнес интелигентност приложение, бизнес интелигенция приложение, бизнес интелигентност софтуер, бизнес интелигенция софтуер, бизнес интелигентност платформа, бизнес интелигенция платформа, бизнес интелигентност софтуерно приложение, бизнес интелигенция софтуерно приложение, бизнес интелигентност софтуерно приложение, бизнес интелигенция софтуерно приложение, бизнес интелигенция софтуерна платформа, бизнес интелигентност софтуерно приложение, бизнес интелигенция софтуерно приложение, бизнес интелигенция, бизнес интелигентност' });
    this.meta.updateTag({ name: 'canonical', content: 'https://denixlabs.com' });
  }

  setEnglishTitle(page: string | null = null) {
    switch (page) {
      case 'home':
        this.title.setTitle('DenixLabs');
        break;
      case 'about':
        this.title.setTitle('DenixLabs - About');
        break;
      case 'services':
        this.title.setTitle('DenixLabs - Services');
        break;
      case 'solutions':
        this.title.setTitle('DenixLabs - Solutions');
        break;
      case 'contact':
        this.title.setTitle('DenixLabs - Contact');
        break;
      default:
        this.title.setTitle('DenixLabs');
    }
  }

  setBulgarianTitle(page: string | null = null) {
    switch (page) {
      case 'home':
        this.title.setTitle('DenixLabs');
        break;
      case 'about':
        this.title.setTitle('DenixLabs - За нас');
        break;
      case 'services':
        this.title.setTitle('DenixLabs - Услуги');
        break;
      case 'solutions':
        this.title.setTitle('DenixLabs - Решения');
        break;
      case 'contact':
        this.title.setTitle('DenixLabs - Контакти');
        break;
      default:
        this.title.setTitle('DenixLabs');
    }
  }

  
}
