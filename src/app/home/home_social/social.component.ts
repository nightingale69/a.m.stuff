import { Component, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent {

  public carouselTileItems: Array<any> = 
  [
    {image: 'assets/images/instagram/slide1.jpg', text: 'ссылка 1', url:'https://www.instagram.com/p/BokXsYtFi-O/'}, 
    {image: 'assets/images/instagram/slide2.jpg', text: 'ссылка 2', url:'https://www.instagram.com/p/BokXsYtFi-O/'}, 
    {image: 'assets/images/instagram/slide3.jpg', text: 'ссылка 3', url:'https://www.instagram.com/p/BokXsYtFi-O/'}, 
    {image: 'assets/images/instagram/slide4.jpg', text: 'ссылка 4', url:'https://www.instagram.com/p/BokXsYtFi-O/'}, 
    {image: 'assets/images/instagram/slide5.jpg', text: 'ссылка 5', url:'https://www.instagram.com/p/BokXsYtFi-O/'}, 
    {image: 'assets/images/instagram/slide6.jpg', text: 'ссылка 6', url:'https://www.instagram.com/p/BokXsYtFi-O/'}, 
    {image: 'assets/images/instagram/slide1.jpg', text: 'ссылка 7', url:'https://www.instagram.com/p/BokXsYtFi-O/'},

    {image: 'assets/images/instagram/slide4.jpg', text: 'ссылка 8', url:'https://www.instagram.com/p/BokXsYtFi-O/'}, 
    {image: 'assets/images/instagram/slide5.jpg', text: 'ссылка 9', url:'https://www.instagram.com/p/BokXsYtFi-O/'}, 
    {image: 'assets/images/instagram/slide6.jpg', text: 'ссылка 10', url:'https://www.instagram.com/p/BokXsYtFi-O/'}, 
    {image: 'assets/images/instagram/slide1.jpg', text: 'ссылка 11', url:'https://www.instagram.com/p/BokXsYtFi-O/'}
  ];

  public carouselTile: NguCarouselConfig = {
    grid: { xs: 2, sm: 3, md: 4, lg: 6, all: 0 },
    slide: 1,
    speed: 450,
    interval: {
      timing: 6000,
      initialDelay: 1000
    },
    point: {
      visible: true
    },
    load: 2,
    velocity: 0,
    loop: true,
    touch: true,
    easing: 'cubic-bezier(0, 0, 0.2, 1)'
  };
}
