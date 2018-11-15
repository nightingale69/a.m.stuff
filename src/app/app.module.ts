import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { UICarouselModule } from "ui-carousel";
import { NguCarouselModule } from '@ngu/carousel';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DescriptionComponent } from './home/home_description/description.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AboutComponent } from './about/about.component';
import { CommunicationsComponent } from './communications/communications.component';
import { SoucesComponent } from './souces/souces.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShopComponent } from './home/home_shop_menu/shop.component';
import { SocialComponent } from './home/home_social/social.component';
import { HomeCommonComponent } from './home/home_common/home-common.component';


const appRoutes: Routes = [
	{ path: '', component: HomeCommonComponent },
	{ path: 'home', component: HomeCommonComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'delivery', component: DeliveryComponent },
	{ path: 'communication', component: CommunicationsComponent },
	{ path: 'about',      component: AboutComponent }
];

@NgModule({
  	declarations: [
  	  	AppComponent,
  	  	ProductsComponent,
  	  	DescriptionComponent,
  	  	DeliveryComponent,
  	  	AboutComponent,
  	  	CommunicationsComponent,
  	  	SoucesComponent,
		ReviewsComponent,
		ShopComponent,
		SocialComponent,
		HomeCommonComponent
  	],
  	imports: [
    	BrowserModule,
		ReactiveFormsModule,
		RouterModule.forRoot(
			appRoutes,
			{ enableTracing: true } // <-- debugging purposes only
		),
		ScrollToModule.forRoot(),
		UICarouselModule,
		NguCarouselModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }