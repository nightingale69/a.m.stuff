import { Component, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {



  /*imgags = [
    'assets/images/bags/product4_1.jpg',
    'assets/images/bags/product2_1.jpg',
    'assets/images/bags/product12_3.jpg',
    'assets/images/bags/product4_1.jpg'
  ];
  public carouselTileItems: Array<any> = [0, 1, 2, 3, 4, 5, 6];
  public carouselTiles = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: []
  };
  public carouselTile: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 4, lg: 6, all: 0 },
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
  }*/


  


  twists = 
  	[
  	  {
		url: "5knifes",
  	    image1: "assets/images/bags/product12_1.jpg",
  	    image2: "assets/images/bags/product12_2.jpg",
  	    image3: "assets/images/bags/product12_3.jpg",
  	    description: 'Для 5 поварских ножей / инструментов', 
  	    price: '6000 ₽'
  	  },
  	  {
		url: "6knifes",
  	    image1: "assets/images/bags/product4_1.jpg",
  	    image2: "assets/images/bags/product4_2.jpg",
  	    image3: "assets/images/bags/product4_3.jpg",
  	    description: 'Для 6 поварских ножей / инструментов', 
  	    price: '6500 ₽'
  	  },
  	  {
		url: "7knifes",
  	    image1: "assets/images/bags/product11_1.jpg",
  	    image2: "assets/images/bags/product11_2.jpg",
  	    image3: "assets/images/bags/product11_3.jpg",
  	    description: 'Для 7 поварских ножей / инструментов', 
  	    price: '5000 ₽'
  	  },
  	  {
		url: "10knifes",
  	    image1: "assets/images/bags/product9_1.jpg",
  	    image2: "assets/images/bags/product9_2.jpg",
  	    image3: "assets/images/bags/product9_3.jpg",
  	    description: 'Для 10 поварских ножей / инструментов', 
  	    price: '6900 ₽'
  	  },
  	  {
		url: "13knifes",
  	    image1:  "assets/images/bags/product1_1.jpg",
  	    image2:  "assets/images/bags/product1_2.jpg",
  	    image3:  "assets/images/bags/product1_3.jpg",
  	    description: 'Для 13 поварских ножей / инструментов', 
  	    price: '8900 ₽'
  	  },
  	  {
		url: "18knifes",
  	    image1: "assets/images/bags/product10_1.jpg",
  	    image2: "assets/images/bags/product10_2.jpg",
  	    image3: "assets/images/bags/product10_3.jpg",
  	    description: 'Для 18 поварских ножей / инструментов', 
  	    price: '15000 ₽'
  	  },
  	  /*{
  	    image1: "assets/images/bags/product2_1.jpg",
  	    image2: "assets/images/bags/product2_2.jpg",
  	    image3: "assets/images/bags/product2_3.jpg",
  	    description: 'Скрутка для 7 поварских инструментов, скрутка для ножей', 
  	    price: '6700 руб.'
  	  },
  	  {
  	    image1: "assets/images/bags/product3_1.jpg",
  	    image2: "assets/images/bags/product3_2.jpg",
  	    image3: "assets/images/bags/product3_3.jpg",
  	    description: 'Скрутка для 13 поварских инструментов, скрутка для ножей', 
  	    price: '8900 руб.'
  	  },
  	  {
  	    image1: "assets/images/bags/product5_1.jpg",
  	    image2: "assets/images/bags/product5_2.jpg",
  	    image3: "assets/images/bags/product5_3.jpg",
  	    description: 'Скрутка для 18 поварских инструментов, скрутка для ножей', 
  	    price: '15000 руб.'
  	  },
  	  {
  	    image1: "assets/images/bags/product6_1.jpg",
  	    image2: "assets/images/bags/product6_2.jpg",
  	    image3: "assets/images/bags/product6_3.jpg",
  	    description: 'Скрутка для 10 поварских инструментов скрутка для ножей', 
  	    price: '6900 руб.'
  	  },
  	  {
  	    image1: "assets/images/bags/product7_1.jpg",
  	    image2: "assets/images/bags/product7_2.jpg",
  	    image3: "assets/images/bags/product7_3.jpg",
  	    description: 'Скрутка для 10 поварских инструментов скрутка для ножей', 
  	    price: '6900 руб.'
  	  },*/
	];





  ngOnInit() {
    this.carouselBanner = {
      grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      loop: true,
      touch: true, // touch is not currently in active for vertical carousel, will enable it in future build
      vertical:  {
        enabled: true,
        height: 400
      }
    };
  }





}
