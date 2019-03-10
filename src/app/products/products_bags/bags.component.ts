import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  	selector: 'app-bags',
  	templateUrl: './bags.component.html',
  	styleUrls: ['./bags.component.css']
})
export class BagsComponent implements OnInit {

	public constructor(private titleService: Title ) { }
	ngOnInit() {
		this.titleService.setTitle('A.M.STUFF - Сумки');
	}

}
