import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  	selector: 'app-different-products',
  	templateUrl: './different-products.component.html',
  	styleUrls: ['./different-products.component.css']
})
export class DifferentProductsComponent {

	galleryOptions = [
		{
			width: '100%',
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
				},
				{
					small: 'assets/images/products/different_products/sharpening_belt3.jpg',
					medium: 'assets/images/products/different_products/sharpening_belt3.jpg',
					big: 'assets/images/products/different_products/sharpening_belt3.jpg'
				}
			],
  	  	  	description: 'Ремень из натуральной кожи КРС растительного дубления для заточки ножей и опасных бритв имеет металлическое сварное кольцо для удержания ремня рукой при правке и карабин для крепления. ', 
  	  	  	price: '1000 ₽'
		},
		{
			name: "Классическая латунная пряжка",
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
				},
				{
					small: 'assets/images/products/belts/classic_buckle3.jpg',
					medium: 'assets/images/products/belts/classic_buckle3.jpg',
					big: 'assets/images/products/belts/classic_buckle3.jpg'
				},
				{
					small: 'assets/images/products/belts/classic_buckle4.jpg',
					medium: 'assets/images/products/belts/classic_buckle4.jpg',
					big: 'assets/images/products/belts/classic_buckle4.jpg'
				}
			],
  	  	  	description: 'Изготовлен из натуральной прочной кожи. Этот пояс можно носить как с классическим костюмом, так и с джинсами. Сдержанный и лаконичный, подойдет к любой одежде, не выйдет из моды.', 
  	  	  	price: '2300 ₽'
		},
		{
			name: "Пряжка ручной ковки",
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
				},
				{
					small: 'assets/images/products/belts/hand-forged_buckle3.jpg',
					medium: 'assets/images/products/belts/hand-forged_buckle3.jpg',
					big: 'assets/images/products/belts/hand-forged_buckle3.jpg'
				},
				{
					small: 'assets/images/products/belts/hand-forged_buckle4.jpg',
					medium: 'assets/images/products/belts/hand-forged_buckle4.jpg',
					big: 'assets/images/products/belts/hand-forged_buckle4.jpg'
				}
			],
  	  	  	description: 'Эксклюзивная кованая квадратная пряжка из нержавеющей стали, либо из латуни. Ременная полоса выполнена из толстой высококачественной натуральной кожи.', 
  	  	  	price: '3000 ₽'
		},
		{
			name: "Подставка-органайзер",
			images: [
				{
					small: 'assets/images/products/different_products/organizer1.jpg',
					medium: 'assets/images/products/different_products/organizer1.jpg',
					big: 'assets/images/products/different_products/organizer1.jpg'
				},
				{
					small: 'assets/images/products/different_products/organizer3.jpg',
					medium: 'assets/images/products/different_products/organizer3.jpg',
					big: 'assets/images/products/different_products/organizer3.jpg'
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
			name: "Набор шаблонов",
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
  	  	  	description: 'Набор содержит наиболее популярные размеры ременных заготовок 25, 30, 35, 38, 40, 44 мм. Шаблоны подходят для контуровки обоих концов ремня и разметки под пробивку отверстий и установку пряжки на ременные винты.', 
  	  	  	price: '700 ₽'
		},
		{
			name: "Шорный пони",
			images: [
				{
					small: 'assets/images/products/different_products/pony1.jpg',
					medium: 'assets/images/products/different_products/pony1.jpg',
					big: 'assets/images/products/different_products/pony1.jpg'
				},
				{
					small: 'assets/images/products/different_products/pony2.jpg',
					medium: 'assets/images/products/different_products/pony2.jpg',
					big: 'assets/images/products/different_products/pony2.jpg'
				},{
					small: 'assets/images/products/different_products/pony3.jpg',
					medium: 'assets/images/products/different_products/pony3.jpg',
					big: 'assets/images/products/different_products/pony3.jpg'
				}
			],
  	  	  	description: 'Удобные тиски для шитья кожаных деталей, можно сказать, что это Ваши вторые "руки". Лёгкий вес, оптимальные размеры, высокое качество и функционал.', 
  	  	  	price: '2000 ₽'
		},
		{
			name: "Монетница",
			images: [
				{
					small: 'assets/images/products/different_products/coin_box.jpg',
					medium: 'assets/images/products/different_products/coin_box.jpg',
					big: 'assets/images/products/different_products/coin_box.jpg'
				}
			],
  	  	  	description: 'Короткое описание этой монетницы. Какова цена?', 
  	  	  	price: '? ₽'
		}
	];
}
