import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-wallets',
  templateUrl: './wallets.component.html',
  styleUrls: ['./wallets.component.css']
})
export class WalletsComponent {

	public constructor(private titleService: Title ) { }
	ngOnInit() {
		this.titleService.setTitle('a.m.stuff - Кошельки');
	}

    wallets = 
  	[
  	  	{
			url: "blue_wallet",
  	    	image: "assets/images/products/wallets/wallet_blue.jpg",
  	    	description: 'Кошелёк синий', 
  	    	price: '1000 ₽'
  	  	},
  	  	{
			url: "red_wallet",
  	    	image: "assets/images/products/wallets/wallet_red.jpg",
  	    	description: 'Кошелёк красный', 
  	    	price: '1000 ₽'
  	  	},
  	  	{
			url: "orange_wallet",
  	    	image: "assets/images/products/wallets/wallet_orange.jpg",
  	    	description: 'Кошелёк оранжевый', 
  	    	price: '1000 ₽'
  	  	},
  	  	{
			url: "dark_brown_wallet",
  	    	image: "assets/images/products/wallets/wallet_dark_brown.jpg",
  	    	description: 'Кошелёк тёмно-коричневый', 
  	    	price: '1000 ₽'
  	  	},
  	  	{
			url: "brown_wallet",
  	    	image:  "assets/images/products/wallets/wallet_brown.jpg",
  	    	description: 'Кошелёк коричневый', 
  	    	price: '1000 ₽'
  	  	}
	];
}
