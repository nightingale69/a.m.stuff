import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  	selector: 'app-different-products',
  	templateUrl: './different-products.component.html',
  	styleUrls: ['./different-products.component.css']
})
export class DifferentProductsComponent {

	public constructor(private titleService: Title ) { }
	ngOnInit() {
		this.titleService.setTitle('A.M.STUFF - Разные товары');
	}

  	different_products = 
  	[
  	  	{
  	    	image1: "assets/images/products/different_products/sharpening_belt1.jpg",
  	    	image2: "assets/images/products/different_products/sharpening_belt2.jpg",
  	    	description: 'Ремень мужской с классической латунной пряжкой',
  	    	price: '? ₽'
		},
		{
			image1: "assets/images/products/different_products/classic_buckle1.jpg",
			image2: "assets/images/products/different_products/classic_buckle2.jpg",
			description: 'Ремень мужской с классической латунной пряжкой',
			price: '1400 ₽'
	  	},
		{
			image1: "assets/images/products/different_products/hand-forged_buckle1.jpg",
			image2: "assets/images/products/different_products/hand-forged_buckle2.jpg",
			description: 'Ремень с пряжкой ручной ковки',
			price: '? ₽'
		},
		{
			image1: "assets/images/products/different_products/organizer1.jpg",
			image2: "assets/images/products/different_products/organizer2.jpg",
			description: 'Подставка-органайзер для телефона, часов и разной мелочи',
			price: '? ₽'
		},
		{
			image1: "assets/images/products/different_products/template1.jpg",
			image2: "assets/images/products/different_products/template2.jpg",
			description: 'Набор шаблонов для изготовления ремней со скругленным кончиком',
			price: '? ₽'
	  	},  	
  	];

}
