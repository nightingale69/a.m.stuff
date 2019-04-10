import { Component } from '@angular/core';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {

  	scroll(el) {
    	el.scrollIntoView();
	}
	  
	visibility: boolean = true;
	invisibility: boolean = false;

    transfer(){
		this.visibility=!this.visibility;
		this.invisibility=!this.invisibility;
	}

	deliveries = 
  	[
    	{
      		place: 'МОСКВА', 
      		where1: 'Самовывоз : ',
      		price1: 'Бесплатно',
      		comment1: 'Уточните в письме, где и когда Вы сможете самостоятельно забрать покупку',
      		where2: 'Курьер внутри МКАД : ',
      		price2: '500 ₽',
      		comment2: '',
      		where3: 'Почтовая служба : ',
      		price3: '600 ₽',
      		comment3: 'Доставка Почтой РФ. Доставка первым классом (авиа). Возможна оплата наложенным платежом. Примерная стоимость - 600р. (зависит от Вашего адреса и веса самой посылки)'
    	},
    	{
      		place: 'РОССИЯ: ', 
      		where1: '',
      		price1: '',
      		comment1: '',
      		where2: '',
      		price2: '',
      		comment2: '',
      		where3: 'Почтовая служба : ',
      		price3: '650 ₽',
      		comment3: 'Возможна доставка Почтой России. Стоимость зависит от веса посылки и Вашего адреса. Возможна отправка наложенным платежом'
    	},
    	{
    	  	place: 'ДРУГИЕ СТРАНЫ', 
    	  	where1: '',
    	  	price1: '',
    	  	comment1: '',
    	  	where2: '',
    	  	price2: '',
    	  	comment2: '',
    	  	where3: 'Почтовая служба : ',
    	  	price3: '1800 ₽',
    	  	comment3: 'Возможна доставка Почтой России. Стоимость зависит от веса посылки и Вашего адреса. Отправка за границу по 100% предоплате'
    	}
  	];

  	payment = 
  	[
		{
			how: 'БАНКОВСКИЙ ПЕРЕВОД НА СЧЁТ: ', 
    	  	comment: 'Карта Сбербанка 4276 3800 9364 7019'
    	},
    	{
			how: 'ПЕРЕВОД НА БАНКОВСКУЮ КАРТУ: ', 
			comment: 'Карта Сбербанка 4276 3800 9364 7019'
    	},
    	{
			how: 'ЭЛЕКТРОННЫЕ ПЛАТЁЖНЫЕ СИСТЕМЫ: ', 
			comment: 'PayPal(Наложенный платёж)'
    	},
		{
			how: 'НАЛИЧНЫЕ: ', 
			comment: 'Рубли, долары, евро'
		}
  	];
}
