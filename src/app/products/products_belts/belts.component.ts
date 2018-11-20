import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-belts',
  templateUrl: './belts.component.html',
  styleUrls: ['./belts.component.css']
})
export class BeltsComponent {

  belts = 
  	[
  	  {
  	    image1: "assets/images/bags/product8_1.jpg",
  	    image2: "assets/images/bags/product8_2.jpg",
  	    image3: "assets/images/bags/product8_3.jpg",
  	    description: 'Ремень для доводки, правки, заточки ножей и бритв', 
  	    price: '1400 ₽'
  	  }
	];

}
