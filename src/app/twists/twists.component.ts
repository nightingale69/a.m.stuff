import { Component, OnInit, Input } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  	selector: 'app-twists',
  	templateUrl: './twists.component.html',
  	styleUrls: ['./twists.component.css']
})
export class TwistsComponent {

	galleryOptions = [
		{
			width: '550px',
			height: '350px',
			imageSize: NgxGalleryImageSize.Cover,
			thumbnailsColumns: 0,
			thumbnailMargin: 0,
			thumbnailsMargin: 0,
			thumbnailsArrows: true,
			thumbnails: false,
			preview: true,
			previewAnimation: false,
			imageArrowsAutoHide: false,
			previewCloseOnClick: true,
			arrowPrevIcon: 'fa fa-arrow-circle-o-left',
			arrowNextIcon: 'fa fa-arrow-circle-o-right'
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

	twists: { name: string, images: { small: any, medium: any, big: any }[], description: string, dimensions: string, colors:string, price: string }[] = 
  	[
		{
			name: "Для 5 поварских ножей / инструментов",
			images: [
				{
					small: 'assets/images/products/twists/product5_1.jpg',
					medium: 'assets/images/products/twists/product5_1.jpg',
					big: 'assets/images/products/twists/product5_1.jpg'
				},
				{
					small: 'assets/images/products/twists/product5_2.jpg',
					medium: 'assets/images/products/twists/product5_2.jpg',
					big: 'assets/images/products/twists/product5_2.jpg'
				}
				,
				{
					small: 'assets/images/products/twists/product5_3.jpg',
					medium: 'assets/images/products/twists/product5_3.jpg',
					big: 'assets/images/products/twists/product5_3.jpg'
				}
			],
  	  	  	description: 'Описание карманов, петель, фишек данной модели', 
			dimensions: 'Размеры: 45x50 см',	  
			colors: 'Цвета: ',
			price: '6000 ₽'
		},
		{
			name: "Для 6 поварских ножей / инструментов",
			images: [
				{
					small: 'assets/images/products/twists/product6_1.jpg',
					medium: 'assets/images/products/twists/product6_1.jpg',
					big: 'assets/images/products/twists/product6_1.jpg'
				},
				{
					small: 'assets/images/products/twists/product6_2.jpg',
					medium: 'assets/images/products/twists/product6_2.jpg',
					big: 'assets/images/products/twists/product6_2.jpg'
				},
				{
					small: 'assets/images/products/twists/product6_3.jpg',
					medium: 'assets/images/products/twists/product6_3.jpg',
					big: 'assets/images/products/twists/product6_3.jpg'
				}
			],
  	  	  	description: 'Описание карманов, петель, фишек данной модели', 
			dimensions: 'Размеры: 45x50 см',	  
			colors: 'Цвета: ',
			price: '6500 ₽'
		},
		{
			name: "Для 7 поварских ножей / инструментов",
			images: [
				{
					small: 'assets/images/products/twists/product7_1.jpg',
					medium: 'assets/images/products/twists/product7_1.jpg',
					big: 'assets/images/products/twists/product7_1.jpg'
				},
				{
					small: 'assets/images/products/twists/product7_2.jpg',
					medium: 'assets/images/products/twists/product7_2.jpg',
					big: 'assets/images/products/twists/product7_2.jpg'
				},
				{
					small: 'assets/images/products/twists/product7_3.jpg',
					medium: 'assets/images/products/twists/product7_3.jpg',
					big: 'assets/images/products/twists/product7_3.jpg'
				}
			],
  	  	  	description: 'Описание карманов, петель, фишек данной модели', 
			dimensions: 'Размеры: 45x50 см',	  
			colors: 'Цвета: ',
			price: '6700 ₽'
		},
		{
			name: "Для 10 поварских ножей / инструментов",
			images: [
				{
					small: 'assets/images/products/twists/product10_1.jpg',
					medium: 'assets/images/products/twists/product10_1.jpg',
					big: 'assets/images/products/twists/product10_1.jpg'
				},
				{
					small: 'assets/images/products/twists/product10_2.jpg',
					medium: 'assets/images/products/twists/product10_2.jpg',
					big: 'assets/images/products/twists/product10_2.jpg'
				},
				{
					small: 'assets/images/products/twists/product10_3.jpg',
					medium: 'assets/images/products/twists/product10_3.jpg',
					big: 'assets/images/products/twists/product10_3.jpg'
				}
			],
  	  	  	description: 'Описание карманов, петель, фишек данной модели', 
			dimensions: 'Размеры: 45x50 см',	  
			colors: 'Цвета: ',
			price: '6900 ₽'
		},
		{
			name: "Для 13 поварских ножей / инструментов",
			images: [
				{
					small: 'assets/images/products/twists/product13_1.jpg',
					medium: 'assets/images/products/twists/product13_1.jpg',
					big: 'assets/images/products/twists/product13_1.jpg'
				},
				{
					small: 'assets/images/products/twists/product13_2.jpg',
					medium: 'assets/images/products/twists/product13_2.jpg',
					big: 'assets/images/products/twists/product13_2.jpg'
				},
				{
					small: 'assets/images/products/twists/product13_3.jpg',
					medium: 'assets/images/products/twists/product13_3.jpg',
					big: 'assets/images/products/twists/product13_3.jpg'
				}
			],
  	  	  	description: 'Описание карманов, петель, фишек данной модели', 
			dimensions: 'Размеры: 45x50 см',	  
			colors: 'Цвета: ',
			price: '8900 ₽'
		},
		{
			name: "Для 18 поварских ножей / инструментов",
			images: [
				{
					small: 'assets/images/products/twists/product18_1.jpg',
					medium: 'assets/images/products/twists/product18_1.jpg',
					big: 'assets/images/products/twists/product18_1.jpg'
				},
				{
					small: 'assets/images/products/twists/product18_2.jpg',
					medium: 'assets/images/products/twists/product18_2.jpg',
					big: 'assets/images/products/twists/product18_2.jpg'
				},
				{
					small: 'assets/images/products/twists/product18_3.jpg',
					medium: 'assets/images/products/twists/product18_3.jpg',
					big: 'assets/images/products/twists/product18_3.jpg'
				}
			],
  	  	  	description: 'Описание карманов, петель, фишек данной модели', 
			dimensions: 'Размеры: 45x50 см',	  
			colors: 'Цвета: ',
			price: '15000 ₽'
		}
	];
}
