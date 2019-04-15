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
  	  	  	description: 'Ремень из натуральной кожи КРС растительного дубления для заточки ножей и опасных бритв имеет металлическое сварное кольцо для удержания ремня рукой при правке и карабин для крепления.', 
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
  	  	  	description: 'В лаконичном дизайне максимальная функциональность. Отличный вариант подарка другу, коллеге, боссу. Возможно добавление вашей надписи.', 
  	  	  	price: '1600 ₽'
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
  	  	  	description: 'Набор содержит наиболее популярные размеры ременных заготовок 25, 30, 35, 38, 40, 44 мм. Шаблоны подходят как для контуровки обоих концов ремня, так и для разметки под пробивку отверстий и установку пряжки на ременные винты.', 
  	  	  	price: '700 ₽'
		},
		{
			name: "Шорник пони (шорный пони)",
			images: [
				{
					small: 'assets/images/products/different_products/pony.jpg',
					medium: 'assets/images/products/different_products/pony.jpg',
					big: 'assets/images/products/different_products/pony.jpg'
				}
			],
  	  	  	description: 'Удобные тиски для шитья кожаных деталей, можно сказать, что это ваши вторые "руки". Индивидуальный и уникальный подход к изготовлению каждого шорника.', 
  	  	  	price: '2000 ₽'
		}
	];
}
