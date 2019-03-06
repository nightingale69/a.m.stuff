import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  	selector: 'app-about',
  	templateUrl: './about.component.html',
  	styleUrls: ['./about.component.css']
})
export class AboutComponent {

	public constructor(private titleService: Title ) { }
	ngOnInit() {
		this.titleService.setTitle('a.m.stuff - О нас');
	}

  	reviews = 
  	[
  	  	{
  	  	  	photo: "assets/images/reviews/review1.jpg",
  	  	  	name: 'Кристина Каверина',
  	  	  	description: 'Очень здорово. Очень хорошее отношение. Ребята не просто профессионалы своего дела, очень внимательные. Им можно и нужно доверять. Спасибо Вам огромное.'
  	  	},
  	  	{
  	  	  	photo: "assets/images/reviews/review2.jpg",
  	  	  	name: 'Николай Зарубин',
  	  	  	description: 'Спасибо огромное за Скрутку. Кожа очень приятная, работа говоря откровенно очень хорошая. Реально ручная работа. Спасибо.'
  	  	},
  	  	{
  	  	  	photo: "assets/images/reviews/review3.jpg",
  	  	  	name: 'Denis',
  	  	  	description: 'Отличный ремень! Спасибо.'
  	  	},
  	  	{
  	  	  	photo: "assets/images/reviews/review4.jpg",
  	  	  	name: 'Екатерина Лисогор',
  	  	  	description: 'Спасибо огромное! Скрутка высочайшего качества! Получился шикарный подарок!'
  	  	},
  	  	{
  	  	  	photo:  "assets/images/reviews/review5.jpg",
  	  	  	name: 'Мария Баяджан',
  	  	  	description: 'Нужен был подарок поваренку. Неожиданно быстро был сделан заказ, раньше срока. Не разочаровало качество. '
  	  	},
  	  	{
  	  	  	photo: "assets/images/reviews/review6.jpg",
  	  	  	name: 'Оля Livien',
  	  	  	description: 'Замечательное изделие, очень хороший мастер!'
  	  	}
  	];
}
