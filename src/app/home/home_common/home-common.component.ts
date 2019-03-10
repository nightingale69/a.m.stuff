import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-common',
  templateUrl: './home-common.component.html',
  styleUrls: ['./home-common.component.css']
})
export class HomeCommonComponent implements OnInit {

	public constructor(private titleService: Title ) { }

	ngOnInit() {
		this.titleService.setTitle('A.M.STUFF - Главная');
	}
}
