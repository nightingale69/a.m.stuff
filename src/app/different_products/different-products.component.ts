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


	different_products_leather: { name: string, images: { small: any, medium: any, big: any }[], description: string, dimensions: string, colors:string, price: string }[] = 
  	[
		{
			name: "Несессер",
			images: [
				{
					small: 'assets/images/products/different_products/tbag_blue.jpg',
					medium: 'assets/images/products/different_products/tbag_blue.jpg',
					big: 'assets/images/products/different_products/tbag_blue.jpg'
				},
				{
					small: 'assets/images/products/different_products/tbag_burgundy.jpg',
					medium: 'assets/images/products/different_products/tbag_burgundy.jpg',
					big: 'assets/images/products/different_products/tbag_burgundy.jpg'
				},
				{
					small: 'assets/images/products/different_products/tbag_light_brown.jpg',
					medium: 'assets/images/products/different_products/tbag_light_brown.jpg',
					big: 'assets/images/products/different_products/tbag_light_brown.jpg'
				},
				{
					small: 'assets/images/products/different_products/tbag_dark_brown.jpg',
					medium: 'assets/images/products/different_products/tbag_dark_brown.jpg',
					big: 'assets/images/products/different_products/tbag_dark_brown.jpg'
				},
				{
					small: 'assets/images/products/different_products/tbag_brown.jpg',
					medium: 'assets/images/products/different_products/tbag_brown.jpg',
					big: 'assets/images/products/different_products/tbag_brown.jpg'
				},
				{
					small: 'assets/images/products/different_products/tbag_red.jpg',
					medium: 'assets/images/products/different_products/tbag_red.jpg',
					big: 'assets/images/products/different_products/tbag_red.jpg'
				}
			],
  	  	  	description: 'Незаменимый помощник в любой поездке. Функциональный, стильный, эксклюзивный несессер из натуральной кожи не займёт много места, но существенно упростит вашу жизнь.', 
			dimensions: '90x90x90',	  
			colors: 'Цвета: ',
			price: '1000 ₽'
		},
		{
			name: "Кархолдер",
			images: [
				{
					small: 'assets/images/products/different_products/wallet_blue.jpg',
					medium: 'assets/images/products/different_products/wallet_blue.jpg',
					big: 'assets/images/products/different_products/wallet_blue.jpg'
				},
				{
					small: 'assets/images/products/different_products/wallet_brown.jpg',
					medium: 'assets/images/products/different_products/wallet_brown.jpg',
					big: 'assets/images/products/different_products/wallet_brown.jpg'
				},
				{
					small: 'assets/images/products/different_products/wallet_dark_brown.jpg',
					medium: 'assets/images/products/different_products/wallet_dark_brown.jpg',
					big: 'assets/images/products/different_products/wallet_dark_brown.jpg'
				},
				{
					small: 'assets/images/products/different_products/wallet_orange.jpg',
					medium: 'assets/images/products/different_products/wallet_orange.jpg',
					big: 'assets/images/products/different_products/wallet_orange.jpg'
				},
				{
					small: 'assets/images/products/different_products/wallet_red.jpg',
					medium: 'assets/images/products/different_products/wallet_red.jpg',
					big: 'assets/images/products/different_products/wallet_red.jpg'
				}
			],
  	  	  	description: 'Миниатюрный, но вместительный. В него можно положить кредитки, бумажные купюры, водительское удостоверение. Если Вы любите небольшие и функциональные вещи - это будет для Вас настоящей находкой.', 
			dimensions: '90x90x90',	  
			colors: 'Цвета: ',
			price: '900 ₽'
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
			dimensions: '90x90x90',	  
			colors: 'Цвета: ',
			price: '? ₽'
		},
		{
			name: "Кейс для документов",
			images: [
				{
					small: 'assets/images/products/different_products/case1.jpg',
					medium: 'assets/images/products/different_products/case1.jpg',
					big: 'assets/images/products/different_products/case1.jpg'
				},
				{
					small: 'assets/images/products/different_products/case2.jpg',
					medium: 'assets/images/products/different_products/case2.jpg',
					big: 'assets/images/products/different_products/case2.jpg'
				}
			],
  	  	  	description: 'Короткое описание этого кейса. Какова цена?', 
			dimensions: '90x90x90',	  
			colors: 'Цвета: ',
			price: '? ₽'
		},
		{
			name: "Классическая латунная пряжка",
			images: [
				{
					small: 'assets/images/products/different_products/classic_buckle1.jpg',
					medium: 'assets/images/products/different_products/classic_buckle1.jpg',
					big: 'assets/images/products/different_products/classic_buckle1.jpg'
				},
				{
					small: 'assets/images/products/different_products/classic_buckle2.jpg',
					medium: 'assets/images/products/different_products/classic_buckle2.jpg',
					big: 'assets/images/products/different_products/classic_buckle2.jpg'
				},
				{
					small: 'assets/images/products/different_products/classic_buckle3.jpg',
					medium: 'assets/images/products/different_products/classic_buckle3.jpg',
					big: 'assets/images/products/different_products/classic_buckle3.jpg'
				},
				{
					small: 'assets/images/products/different_products/classic_buckle4.jpg',
					medium: 'assets/images/products/different_products/classic_buckle4.jpg',
					big: 'assets/images/products/different_products/classic_buckle4.jpg'
				}
			],
  	  	  	description: 'Изготовлен из натуральной прочной кожи. Этот пояс можно носить как с классическим костюмом, так и с джинсами. Сдержанный и лаконичный, подойдет к любой одежде, не выйдет из моды.', 
			dimensions: '90x90x90',	  
			colors: 'Цвета: ',
			price: '2300 ₽'
		},
		{
			name: "Пряжка ручной ковки",
			images: [
				{
					small: 'assets/images/products/different_products/hand-forged_buckle1.jpg',
					medium: 'assets/images/products/different_products/hand-forged_buckle1.jpg',
					big: 'assets/images/products/different_products/hand-forged_buckle1.jpg'
				},
				{
					small: 'assets/images/products/different_products/hand-forged_buckle2.jpg',
					medium: 'assets/images/products/different_products/hand-forged_buckle2.jpg',
					big: 'assets/images/products/different_products/hand-forged_buckle2.jpg'
				},
				{
					small: 'assets/images/products/different_products/hand-forged_buckle3.jpg',
					medium: 'assets/images/products/different_products/hand-forged_buckle3.jpg',
					big: 'assets/images/products/different_products/hand-forged_buckle3.jpg'
				},
				{
					small: 'assets/images/products/different_products/hand-forged_buckle4.jpg',
					medium: 'assets/images/products/different_products/hand-forged_buckle4.jpg',
					big: 'assets/images/products/different_products/hand-forged_buckle4.jpg'
				}
			],
  	  	  	description: 'Эксклюзивная кованая квадратная пряжка из нержавеющей стали, либо из латуни. Ременная полоса выполнена из толстой высококачественной натуральной кожи.', 
			dimensions: '90x90x90',	  
			colors: 'Цвета: ',
			price: '3000 ₽'
		},
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
			dimensions: '90x90x90',	  
			colors: 'Цвета: ',
			price: '1000 ₽'
		},
		{
			name: "Браслет",
			images: [
				{
					small: 'assets/images/products/different_products/bracelet1.jpg',
					medium: 'assets/images/products/different_products/bracelet1.jpg',
					big: 'assets/images/products/different_products/bracelet1.jpg'
				},
				{
					small: 'assets/images/products/different_products/bracelet2.jpg',
					medium: 'assets/images/products/different_products/bracelet2.jpg',
					big: 'assets/images/products/different_products/bracelet2.jpg'
				},
				{
					small: 'assets/images/products/different_products/bracelet3.jpg',
					medium: 'assets/images/products/different_products/bracelet3.jpg',
					big: 'assets/images/products/different_products/bracelet3.jpg'
				},
				{
					small: 'assets/images/products/different_products/bracelet4.jpg',
					medium: 'assets/images/products/different_products/bracelet4.jpg',
					big: 'assets/images/products/different_products/bracelet4.jpg'
				}
			],
  	  	  	description: 'Короткое описание этого браслета. Какова цена?', 
			dimensions: '90x90x90',	  
			colors: 'Цвета: ',
			price: '? ₽'
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
			dimensions: '90x90x90',	  
			colors: 'Цвета: ',
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
			dimensions: '90x90x90',	  
			colors: 'Цвета: ',
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
			dimensions: '90x90x90',	  
			colors: 'Цвета: ',
			price: '2000 ₽'
		}
	];
}
