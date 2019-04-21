import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { UICarouselModule } from "ui-carousel";

import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { ContactComponent } from './contact/contact.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TwistsComponent } from './twists/twists.component';
import { DifferentProductsComponent } from './different_products/different-products.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

import { NguCarouselModule } from '@ngu/carousel';
import { NgxSlidesModule } from 'ngx-slides';
import {SlideshowModule} from 'ng-simple-slideshow';
import { NgxGalleryModule } from 'ngx-gallery';
import { IntroComponent } from './intro/intro.component';

@NgModule({
  	declarations: [
  	  	AppComponent,
  	  	DescriptionComponent,
  	  	DeliveryComponent,
		ReviewsComponent,
		NotFoundComponentComponent,
		TwistsComponent,
		DifferentProductsComponent,
		ContactComponent,
		IntroComponent
  	],
  	imports: [
    	BrowserModule,
		ReactiveFormsModule,
		ScrollToModule.forRoot(),
		UICarouselModule,
		NguCarouselModule,
		NgxSlidesModule,
		SlideshowModule,
		NgxGalleryModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})
export class AppModule { }