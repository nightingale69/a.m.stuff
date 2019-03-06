import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-toilet-bags',
  templateUrl: './toilet-bags.component.html',
  styleUrls: ['./toilet-bags.component.css']
})
export class ToiletBagsComponent {

	public constructor(private titleService: Title ) { }
	ngOnInit() {
		this.titleService.setTitle('a.m.stuff - Несессеры');
	}

  	toilet_bags = 
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
}
