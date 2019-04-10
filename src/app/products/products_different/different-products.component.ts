import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout, NgxGalleryImageSize } from 'ngx-gallery';

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


	galleryOptions = [
		{
			width: '400px',
			height: '400px',
			imageSize: NgxGalleryImageSize.Cover,
			thumbnailsColumns: 5,
			thumbnailMargin: 0,
			thumbnailsMargin: 0,
			thumbnailsArrows: true,
			thumbnails: false,
			preview: true,
			previewAnimation: false,
			imageArrowsAutoHide: true,
			previewCloseOnClick: true,
			arrowPrevIcon: 'fa fa-arrow-circle-left',
			arrowNextIcon: 'fa fa-arrow-circle-right'
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

	different_products: { name: string, images: { small: any, medium: any, big: any }[], description: string, price: string }[] = 
  	[
  	  	{
			name: "Ремень для заточки",
			images: [
				{
					small: 'assets/images/products/different_products/sharpening_belt1.jpg',
					medium: 'assets/images/products/different_products/sharpening_belt1.jpg',
					big: 'assets/images/products/different_products/sharpening_belt1.jpg'
				},
				{
					small: 'assets/images/products/different_products/sharpening_belt2.jpg',
					medium: 'assets/images/products/different_products/sharpening_belt2.jpg',
					big: 'assets/images/products/different_products/sharpening_belt2.jpg'
				}
			],
  	  	  	description: 'Ремень для заточки', 
  	  	  	price: '1000 ₽'
		},
		{
			name: "Подставка-органайзер для телефона, часов и разной мелочи",
			images: [
				{
					small: 'assets/images/products/different_products/organizer1.jpg',
					medium: 'assets/images/products/different_products/organizer1.jpg',
					big: 'assets/images/products/different_products/organizer1.jpg'
				},
				{
					small: 'assets/images/products/different_products/organizer2.jpg',
					medium: 'assets/images/products/different_products/organizer2.jpg',
					big: 'assets/images/products/different_products/organizer2.jpg'
				}
			],
  	  	  	description: 'Подставка-органайзер для телефона, часов и разной мелочи', 
  	  	  	price: '1000 ₽'
		},
		{
			name: "Набор шаблонов для изготовления ремней со скругленным кончиком",
			images: [
				{
					small: 'assets/images/products/different_products/template1.jpg',
					medium: 'assets/images/products/different_products/template1.jpg',
					big: 'assets/images/products/different_products/template1.jpg'
				},
				{
					small: 'assets/images/products/different_products/template2.jpg',
					medium: 'assets/images/products/different_products/template2.jpg',
					big: 'assets/images/products/different_products/template2.jpg'
				}
			],
  	  	  	description: 'Набор шаблонов для изготовления ремней со скругленным кончиком', 
  	  	  	price: '1000 ₽'
		}	
		/*{
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
		},*/	
	];
}
