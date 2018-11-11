import { Component } from '@angular/core';

@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {

  	scroll(el) {
    	el.scrollIntoView();
	}
	  
	visibility: boolean = true;
	invisibility: boolean = false;

    transfer(){
		this.visibility=!this.visibility;
		this.invisibility=!this.invisibility;
	}

}
