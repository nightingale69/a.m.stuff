import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})

export class DescriptionComponent {

	slides: (string | IImage)[] =
  	[
    	{
			url: "assets/images/description/description1.jpg",
			title: 'Текст первого слайда, перекидывающий на другую страницу',
			caption: 'Текст первого слайда, перекидывающий на другую страницу',
			href: ''
    	},
    	{
			url: "assets/images/products/twists/product2_1.jpg",
			title: 'Текст второго слайда, перекидывающий на другую страницу',
			caption: 'Текст второго слайда, перекидывающий на другую страницу',
			href: ''
    	},
    	{
			url: "assets/images/products/twists/product12_3.jpg",
			title: 'Текст третьего слайда, перекидывающий на другую страницу',
			caption: 'Текст третьего слайда, перекидывающий на другую страницу',
			href: ''
    	}
	]

	height: string = '400px';
  	minHeight: string = '60vh';
  	arrowSize: string = '20px';
  	showArrows: boolean = true;
  	disableSwiping: boolean = false;
  	autoPlay: boolean = false;
  	autoPlayInterval: number = 10000;
  	stopAutoPlayOnSlide: boolean = true;
  	debug: boolean = false;
  	backgroundSize: string = 'cover';
  	backgroundPosition: string = '50% 65%';
  	backgroundRepeat: string = 'no-repeat';
  	showDots: boolean = true;
  	dotColor: string = '#212121';
  	showCaptions: boolean = false;
	captionColor: string = '#212121'; 
  	captionBackground: string = 'rgba(0, 0, 0,)';
  	lazyLoad: boolean = false;
  	hideOnNoSlides: boolean = false;
  	width: string = '100%';
  	fullscreen: boolean = false;
}