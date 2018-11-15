import { Component, OnInit } from '@angular/core';
import { NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

	slides = 
  	[
    	{
    	  	slideImg: "assets/images/bags/product4_1.jpg",
    	  	description: 'Текст первого слайда, перекидывающий на другую страницу'
    	},
    	{
			slideImg: "assets/images/bags/product2_1.jpg",
			description: 'Текст второго слайда, перекидывающий на другую страницу'
    	},
    	{
			slideImg: "assets/images/bags/product12_3.jpg",
			description: 'Текст третьего слайда, перекидывающий на другую страницу'
    	}
	];












	imgags = [
		'assets/images/bags/product12_3.jpg',
		'assets/images/bags/product12_3.jpg',
		'assets/images/bags/product12_3.jpg',
		'assets/images/bags/product12_3.jpg'
	  ];
	  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5];
	  public carouselTiles = {
		0: [],
		1: [],
		2: [],
		3: [],
		4: [],
		5: []
	  };
	  public carouselTile: NguCarouselConfig = {
		grid: { xs: 1, sm: 1, md: 3, lg: 3, all: 0 },
		slide: 3,
		speed: 250,
		point: {
		  visible: true
		},
		load: 2,
		velocity: 0,
		touch: true,
		easing: 'cubic-bezier(0, 0, 0.2, 1)'
	  };
	  constructor() {}
	 
	  ngOnInit() {
		this.carouselTileItems.forEach(el => {
		  this.carouselTileLoad(el);
		});
	  }
	 
	  public carouselTileLoad(j) {
		// console.log(this.carouselTiles[j]);
		const len = this.carouselTiles[j].length;
		if (len <= 30) {
		  for (let i = len; i < len + 15; i++) {
			this.carouselTiles[j].push(
			  this.imgags[Math.floor(Math.random() * this.imgags.length)]
			);
		  }
		}
	  }













}
