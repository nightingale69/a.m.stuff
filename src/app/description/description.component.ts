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

}
