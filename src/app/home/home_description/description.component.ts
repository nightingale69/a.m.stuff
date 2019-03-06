import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

	slides = 
  	[
    	{
    	  	slideImg: "assets/images/products/twists/product4_1.jpg",
    	  	description: 'Текст первого слайда, перекидывающий на другую страницу'
    	},
    	{
			slideImg: "assets/images/products/twists/product2_1.jpg",
			description: 'Текст второго слайда, перекидывающий на другую страницу'
    	},
    	{
			slideImg: "assets/images/products/twists/product12_3.jpg",
			description: 'Текст третьего слайда, перекидывающий на другую страницу'
    	}
	]
}