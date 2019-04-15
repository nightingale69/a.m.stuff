import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'app-toilet-bags',
  templateUrl: './toilet-bags.component.html',
  styleUrls: ['./toilet-bags.component.css']
})
export class ToiletBagsComponent {

  	toilet_bagsa = 
  	[
  	  	{
		    url: "blue_toilet_bag",
  	    	image: "assets/images/products/toilet_bags/tbag_blue.jpg",
  	    	description: 'Несессер синий', 
  	    	price: '1000 ₽'
  	  	},
  	  	{
		    url: "burgundy_toilet_bag",
  	    	image: "assets/images/products/toilet_bags/tbag_burgundy.jpg",
  	    	description: 'Несессер бордовый', 
  	    	price: '1000 ₽'
  	  	},
  	  	{
		    url: "light_brown_toilet_bag",
  	    	image: "assets/images/products/toilet_bags/tbag_light_brown.jpg",
  	    	description: 'Несессер светло-коричневый', 
  	    	price: '1000 ₽'
  	  	},
  	  	{
		    url: "dark_brown_toilet_bag",
  	    	image: "assets/images/products/toilet_bags/tbag_dark_brown.jpg",
  	    	description: 'Несессер тёмно-коричневый', 
  	    	price: '1000 ₽'
  	  	},
  	  	{
		    url: "brown_toilet_bag",
  	    	image:  "assets/images/products/toilet_bags/tbag_brown.jpg",
  	    	description: 'Несессер коричневый', 
  	    	price: '1000 ₽'
      	},
      	{
		    url: "red_toilet_bag",
  	    	image:  "assets/images/products/toilet_bags/tbag_red.jpg",
  	    	description: 'Несессер красный', 
  	    	price: '1000 ₽'
  	  	}
	];

	galleryOptions = [
		{
			width: '670px',
			height: '400px',
			image: false,
			imageSize: NgxGalleryImageSize.Cover,
			thumbnailsColumns: 3,
			thumbnailsRows: 2,
			thumbnailMargin: 10,
			thumbnailsMargin: 0,
			thumbnailsArrows: true,
			thumbnails: true,
			preview: true,
			previewAnimation: true,
			imageArrowsAutoHide: true,
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

	toilet_bags = [
		{
			small: 'assets/images/products/toilet_bags/tbag_blue.jpg',
			medium: 'assets/images/products/toilet_bags/tbag_blue.jpg',
			big: 'assets/images/products/toilet_bags/tbag_blue.jpg'
		},
		{
			small: 'assets/images/products/toilet_bags/tbag_burgundy.jpg',
			medium: 'assets/images/products/toilet_bags/tbag_burgundy.jpg',
			big: 'assets/images/products/toilet_bags/tbag_burgundy.jpg'
		},
		{
			small: 'assets/images/products/toilet_bags/tbag_light_brown.jpg',
			medium: 'assets/images/products/toilet_bags/tbag_light_brown.jpg',
			big: 'assets/images/products/toilet_bags/tbag_light_brown.jpg'
		},
		{
			small: 'assets/images/products/toilet_bags/tbag_dark_brown.jpg',
			medium: 'assets/images/products/toilet_bags/tbag_dark_brown.jpg',
			big: 'assets/images/products/toilet_bags/tbag_dark_brown.jpg'
		},
		{
			small: 'assets/images/products/toilet_bags/tbag_brown.jpg',
			medium: 'assets/images/products/toilet_bags/tbag_brown.jpg',
			big: 'assets/images/products/toilet_bags/tbag_brown.jpg'
		},
		{
			small: 'assets/images/products/toilet_bags/tbag_red.jpg',
			medium: 'assets/images/products/toilet_bags/tbag_red.jpg',
			big: 'assets/images/products/toilet_bags/tbag_red.jpg'
		}
	];
}
