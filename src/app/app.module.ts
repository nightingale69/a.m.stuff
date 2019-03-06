import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { UICarouselModule } from "ui-carousel";

import { AppComponent } from './app.component';
import { HomeCommonComponent } from './home/home_common/home-common.component';
import { DescriptionComponent } from './home/home_description/description.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { AboutComponent } from './about/about.component';
import { CommunicationsComponent } from './communications/communications.component';
import { SoucesComponent } from './souces/souces.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShopComponent } from './home/home_shop_menu/shop.component';
import { SocialComponent } from './home/home_social/social.component';
import { ProductsCommonComponent } from './products/products-common.component';
import { DetailsComponent } from './products/products_details/details.component';
import { TwistsComponent } from './products/products_twists/twists.component';
import { WalletsComponent } from './products/products_wallets/wallets.component';
import { DifferentProductsComponent } from './products/products_different/different-products.component';
import { CoversComponent } from './products/products_covers/covers.component';
import { BagsComponent } from './products/products_bags/bags.component';
import { ToiletBagsComponent } from './products/products_toilet-bags/toilet-bags.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

import { NguCarouselModule } from '@ngu/carousel';
/*import { ProductsModule } from './products/products.module';*/


const appRoutes: Routes = [
	{ path: '', component: HomeCommonComponent },
	{ path: 'products', component: ProductsCommonComponent, children: 
	  [
		{ path: 'twists', component: TwistsComponent },
		{ path: 'wallets', component: WalletsComponent },
		{ path: 'different', component: DifferentProductsComponent },
		{ path: 'covers', component: CoversComponent },
		{ path: 'bags', component: BagsComponent },
		{ path: 'toilet_bags', component: ToiletBagsComponent }
	  ] 
	},
	{ path: 'delivery', component: DeliveryComponent },
	{ path: 'communication', component: CommunicationsComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'products/:details', component: DetailsComponent },
	{ path: '**', component: NotFoundComponentComponent }
];

@NgModule({
  	declarations: [
  	  	AppComponent,
  	  	DescriptionComponent,
  	  	DeliveryComponent,
  	  	AboutComponent,
  	  	CommunicationsComponent,
  	  	SoucesComponent,
		ReviewsComponent,
		ShopComponent,
		SocialComponent,
		HomeCommonComponent,
		ProductsCommonComponent,
		NotFoundComponentComponent,
		TwistsComponent,
		WalletsComponent,
		BagsComponent,
		DifferentProductsComponent,
		ToiletBagsComponent,
		CoversComponent,
		DetailsComponent
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