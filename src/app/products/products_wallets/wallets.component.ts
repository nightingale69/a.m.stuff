import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent {

    galleryOptions = [
		{
			width: '580px',
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

	galleryImagesWallets = [
		{
			small: 'assets/images/products/wallets/wallet_blue.jpg',
			medium: 'assets/images/products/wallets/wallet_blue.jpg',
			big: 'assets/images/products/wallets/wallet_blue.jpg'
		},
		{
			small: 'assets/images/products/wallets/wallet_brown.jpg',
			medium: 'assets/images/products/wallets/wallet_brown.jpg',
			big: 'assets/images/products/wallets/wallet_brown.jpg'
		},
		{
			small: 'assets/images/products/wallets/wallet_dark_brown.jpg',
			medium: 'assets/images/products/wallets/wallet_dark_brown.jpg',
			big: 'assets/images/products/wallets/wallet_dark_brown.jpg'
		},
		{
			small: 'assets/images/products/wallets/wallet_orange.jpg',
			medium: 'assets/images/products/wallets/wallet_orange.jpg',
			big: 'assets/images/products/wallets/wallet_orange.jpg'
		},
		{
			small: 'assets/images/products/wallets/wallet_red.jpg',
			medium: 'assets/images/products/wallets/wallet_red.jpg',
			big: 'assets/images/products/wallets/wallet_red.jpg'
		}
	];
}
