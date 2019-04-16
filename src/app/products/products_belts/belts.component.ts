import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'app-belts',
  templateUrl: './belts.component.html',
  styleUrls: ['./belts.component.css']
})
export class BeltsComponent {

	galleryOptions = [
		{
			width: '100%',
			height: '350px',
			imageSize: NgxGalleryImageSize.Cover,
			thumbnailsColumns: 5,
			thumbnailMargin: 0,
			thumbnailsMargin: 0,
			thumbnailsArrows: true,
			thumbnails: false,
			preview: false,
			previewAnimation: false,
			imageArrowsAutoHide: false,
			previewCloseOnClick: true,
			arrowPrevIcon: 'fa fa-arrow-left',
			arrowNextIcon: 'fa fa-arrow-right'
		},
		// max-width 800
		{
			breakpoint: 800,
			width: '600px',
			height: '400px',
			imagePercent: 80,
			thumbnailsPercent: 20,
		},
		// max-width 400
		{
			breakpoint: 600,
			width: '30vw',
			height: '600px',
			imagePercent: 80,
			thumbnailsPercent: 20,
			preview: false
		}
	];

	belts: { name: string, images: { small: any, medium: any, big: any }[], description: string, price: string }[] = 
  	[
		{
			name: "Ремень мужской с классической латунной пряжкой",
			images: [
				{
					small: 'assets/images/products/belts/classic_buckle1.jpg',
					medium: 'assets/images/products/belts/classic_buckle1.jpg',
					big: 'assets/images/products/belts/classic_buckle1.jpg'
				},
				{
					small: 'assets/images/products/belts/classic_buckle2.jpg',
					medium: 'assets/images/products/belts/classic_buckle2.jpg',
					big: 'assets/images/products/belts/classic_buckle2.jpg'
				}
			],
  	  	  	description: 'Изготовлен из натуральной прочной кожи. Этот пояс можно носить как с классическим костюмом, так и с джинсами. Сдержанный и лаконичный, подойдет к любой одежде, не выйдет из моды. Возможно использовать на разные обхваты талии благодаря довольно большому количеству отверстий.', 
  	  	  	price: '2300 ₽'
		},
  	  	{
			name: "Ремень с пряжкой ручной ковки",
			images: [
				{
					small: 'assets/images/products/belts/hand-forged_buckle1.jpg',
					medium: 'assets/images/products/belts/hand-forged_buckle1.jpg',
					big: 'assets/images/products/belts/hand-forged_buckle1.jpg'
				},
				{
					small: 'assets/images/products/belts/hand-forged_buckle2.jpg',
					medium: 'assets/images/products/belts/hand-forged_buckle2.jpg',
					big: 'assets/images/products/belts/hand-forged_buckle2.jpg'
				}
			],
  	  	  	description: 'Эксклюзивная кованая квадратная пряжка из нержавеющей стали либо из латуни. Пряжка выполнена методом ручной ковки. Характерный вид кованых, а не штампованных, предметов, результат трудоемкой отделки. Такой дизайн – это уже дизайн уровня украшений, а не обычной фурнитуры. Ременная полоса выполнена из толстой высококачественной натуральной кожи.', 
  	  	  	price: '3000 ₽'
		}
	];
}
