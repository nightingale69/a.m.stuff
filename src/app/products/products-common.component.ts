import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation, NgxGalleryLayout, NgxGalleryImageSize } from 'ngx-gallery';

@Component({
  selector: 'app-products-common',
  templateUrl: './products-common.component.html',
  styleUrls: ['./products-common.component.css']
})
export class ProductsCommonComponent {

	galleryOptions: NgxGalleryOptions[];
	galleryImagesTwists: NgxGalleryImage[];
	galleryImagesWallets: NgxGalleryImage[];
 
    ngOnInit(): void {
 
        this.galleryOptions = [
            {
                width: '500px',
                height: '400px',
                imageSize: NgxGalleryImageSize.Cover,
				thumbnailsColumns: 5,
				thumbnailMargin: 2,
                thumbnailsMargin: 2,
                thumbnailsArrows: false,
                preview: true,
                previewAnimation: false,
                imageArrowsAutoHide: true,
                previewCloseOnClick: true,
                arrowPrevIcon: 'fa fa-angle-left',
                arrowNextIcon: 'fa fa-angle-right',
                
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
 
        this.galleryImagesTwists = [
            {
                small: 'assets/images/products/twists/product1_1.jpg',
                medium: 'assets/images/products/twists/product1_1.jpg'
            },
            {
                small: 'assets/images/products/twists/product2_1.jpg',
                medium: 'assets/images/products/twists/product2_1.jpg'
            },
            {
                small: 'assets/images/products/twists/product3_1.jpg',
                medium: 'assets/images/products/twists/product3_1.jpg'
            },
            {
                small: 'assets/images/products/twists/product4_1.jpg',
                medium: 'assets/images/products/twists/product4_1.jpg'
            }
		];
		
		this.galleryImagesWallets = [
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

}
