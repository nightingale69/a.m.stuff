import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'app-toilet-bags',
  templateUrl: './toilet-bags.component.html',
  styleUrls: ['./toilet-bags.component.css']
})
export class ToiletBagsComponent {

	galleryOptions = [
		{
			width: '500px',
			height: '400px',
			image: true,
			imageSize: NgxGalleryImageSize.Cover,
			thumbnailsColumns: 6,
			thumbnailsRows: 1,
			thumbnailMargin: 3,
			thumbnailsMargin: 3,
			thumbnailsArrows: true,
			thumbnails: true,
			preview: true,
			previewAnimation: true,
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
			thumbnailsPercent: 20
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
