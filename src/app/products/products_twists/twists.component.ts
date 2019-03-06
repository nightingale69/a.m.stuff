import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  	selector: 'app-twists',
  	templateUrl: './twists.component.html',
  	styleUrls: ['./twists.component.css']
})
export class TwistsComponent {

	public constructor(private titleService: Title ) { }
	ngOnInit() {
		this.titleService.setTitle('a.m.stuff - Скрутки');
	}

	twists = 
  	[
  	  {
		url: "5knifes",
  	    image1: "assets/images/products/twists/product12_1.jpg",
  	    image2: "assets/images/products/twists/product12_2.jpg",
  	    image3: "assets/images/products/twists/product12_3.jpg",
  	    description: 'Для 5 поварских ножей / инструментов', 
  	    price: '6000 ₽'
  	  },
  	  {
		url: "6knifes",
  	    image1: "assets/images/products/twists/product4_1.jpg",
  	    image2: "assets/images/products/twists/product4_2.jpg",
  	    image3: "assets/images/products/twists/product4_3.jpg",
  	    description: 'Для 6 поварских ножей / инструментов', 
  	    price: '6500 ₽'
  	  },
  	  {
		url: "7knifes",
  	    image1: "assets/images/products/twists/product11_1.jpg",
  	    image2: "assets/images/products/twists/product11_2.jpg",
  	    image3: "assets/images/products/twists/product11_3.jpg",
  	    description: 'Для 7 поварских ножей / инструментов', 
  	    price: '5000 ₽'
  	  },
  	  {
		url: "10knifes",
  	    image1: "assets/images/products/twists/product9_1.jpg",
  	    image2: "assets/images/products/twists/product9_2.jpg",
  	    image3: "assets/images/products/twists/product9_3.jpg",
  	    description: 'Для 10 поварских ножей / инструментов', 
  	    price: '6900 ₽'
  	  },
  	  {
		url: "13knifes",
  	    image1:  "assets/images/products/twists/product1_1.jpg",
  	    image2:  "assets/images/products/twists/product1_2.jpg",
  	    image3:  "assets/images/products/twists/product1_3.jpg",
  	    description: 'Для 13 поварских ножей / инструментов', 
  	    price: '8900 ₽'
  	  },
  	  {
		url: "18knifes",
  	    image1: "assets/images/products/twists/product10_1.jpg",
  	    image2: "assets/images/products/twists/product10_2.jpg",
  	    image3: "assets/images/products/twists/product10_3.jpg",
  	    description: 'Для 18 поварских ножей / инструментов', 
  	    price: '15000 ₽'
  	  },
  	  /*{
  	    image1: "assets/images/bags/product2_1.jpg",
  	    image2: "assets/images/bags/product2_2.jpg",
  	    image3: "assets/images/bags/product2_3.jpg",
  	    description: 'Скрутка для 7 поварских инструментов, скрутка для ножей', 
  	    price: '6700 руб.'
  	  },
  	  {
  	    image1: "assets/images/bags/product3_1.jpg",
  	    image2: "assets/images/bags/product3_2.jpg",
  	    image3: "assets/images/bags/product3_3.jpg",
  	    description: 'Скрутка для 13 поварских инструментов, скрутка для ножей', 
  	    price: '8900 руб.'
  	  },
  	  {
  	    image1: "assets/images/bags/product5_1.jpg",
  	    image2: "assets/images/bags/product5_2.jpg",
  	    image3: "assets/images/bags/product5_3.jpg",
  	    description: 'Скрутка для 18 поварских инструментов, скрутка для ножей', 
  	    price: '15000 руб.'
  	  },
  	  {
  	    image1: "assets/images/bags/product6_1.jpg",
  	    image2: "assets/images/bags/product6_2.jpg",
  	    image3: "assets/images/bags/product6_3.jpg",
  	    description: 'Скрутка для 10 поварских инструментов скрутка для ножей', 
  	    price: '6900 руб.'
  	  },
  	  {
  	    image1: "assets/images/bags/product7_1.jpg",
  	    image2: "assets/images/bags/product7_2.jpg",
  	    image3: "assets/images/bags/product7_3.jpg",
  	    description: 'Скрутка для 10 поварских инструментов скрутка для ножей', 
  	    price: '6900 руб.'
  	  },*/
	];
}
