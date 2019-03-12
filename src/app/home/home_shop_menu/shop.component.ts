import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-shop',
	templateUrl: './shop.component.html',
	styleUrls: ['./shop.component.css']
})

export class ShopComponent{

	production_column1 = 
  	[
  	  	{
			name: "Скрутки",
			routerLink: "/products/twists"
  	  	},
  	  	{
			name: "Сумки",
			routerLink: "/products/bags"
  	  	},
  	  	{
			name: "Несессеры",
			routerLink: "/products/bags"
  	  	}
	];

	production_column2 = 
  	[
  	  	{
			name: "Кошельки",
			routerLink: "/products/wallets"
  	  	},
  	  	{
			name: "Кейсы",
			routerLink: "/products/covers"
  	  	},
  	  	{
			name: "Разное",
			routerLink: "/products/bags"
  	  	}
	];

}
