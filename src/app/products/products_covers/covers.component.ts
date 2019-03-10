import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  	selector: 'app-covers',
  	templateUrl: './covers.component.html',
  	styleUrls: ['./covers.component.css']
})
export class CoversComponent implements OnInit {

	public constructor(private titleService: Title ) { }
	ngOnInit() {
		this.titleService.setTitle('A.M.STUFF - Кейсы');
	}
}
