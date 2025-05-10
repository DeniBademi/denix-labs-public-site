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

    if (!isPlatformBrowser(this.platform_id)) {
      return;
    }

    switch (page) {
      case '':
        this.title.setTitle('DenixLabs');
        break;
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
      case 'automatic-customer-support':
        this.title.setTitle('DenixLabs - Автоматично обслужване на клиенти');
        break;
      case 'document-analysis':
        this.title.setTitle('DenixLabs - Анализ на документи');
        break;
      case 'qa-and-anomalies':
        this.title.setTitle('DenixLabs - Качествен контрол и разпознаване на дефекти');
        break;

      case 'qa-and-anomalies':
        this.title.setTitle('DenixLabs - Автоматично менижиране на инвентара');
        break;
      case 'qa-and-anomalies':
        this.title.setTitle('DenixLabs - Лицево разпознаване');
        break;
      case 'risk-assessment':
        this.title.setTitle('DenixLabs - Оценка на риска');
        break;
      case 'predictive-maintenance':
        this.title.setTitle('DenixLabs - Предсказуема поддръжка');
        break;
      case 'contact':
        this.title.setTitle('DenixLabs - Контакти');
        break;
      default:
        this.title.setTitle('DenixLabs');
    }
    this.meta.updateTag({ name: 'description', content: 'DenixLabs е мост между науката и бизнеса. Създаваме съвременни и интелигентни системи с изкуствен интелект, които помагат да вземате информирани решения и да автоматизирате рутинни задачи.' });
    this.meta.updateTag({ name: 'keywords', content: 'Изкуствен интелект, машинно обучение, невронни мрежи, дълбоко обучение, роботика, автоматизация, бизнес процеси, бизнес анализ, бизнес интелигентност, бизнес интелигенция, бизнес интелигентно приложение, бизнес интелигентност софтуерна платформа, бизнес интелигентност приложение, бизнес интелигенция приложение, бизнес интелигентност софтуер, бизнес интелигенция софтуер, бизнес интелигентност платформа, бизнес интелигенция платформа, бизнес интелигентност софтуерно приложение, бизнес интелигенция софтуерно приложение, бизнес интелигентност софтуерно приложение, бизнес интелигенция софтуерно приложение, бизнес интелигенция софтуерна платформа, бизнес интелигентност софтуерно приложение, бизнес интелигенция софтуерно приложение, бизнес интелигенция, бизнес интелигентност' });
    this.meta.updateTag({ name: 'canonical', content: 'https://denixlabs.com' });
  }
}
