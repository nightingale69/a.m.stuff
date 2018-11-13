import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { UICarouselModule } from "ui-carousel";

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { DescriptionComponent } from './description/description.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AboutComponent } from './about/about.component';
import { CommunicationsComponent } from './communications/communications.component';
import { SoucesComponent } from './souces/souces.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShopComponent } from './shop/shop.component';

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
		ShopComponent
  	],
  	imports: [
    	BrowserModule,
		ReactiveFormsModule,
		ScrollToModule.forRoot(),
		UICarouselModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }