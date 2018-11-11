import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  	selector: 'app-communications',
  	templateUrl: './communications.component.html',
  	styleUrls: ['./communications.component.css']
})

export class CommunicationsComponent implements OnInit {
	orderForm: FormGroup;
	
	ngOnInit(): void {
		this.orderForm = new FormGroup({
		  	'name': new FormControl('', [
				Validators.required,
				Validators.minLength(2),
				Validators.pattern("^[А-я ]*$")
		  	]),
		  	'phone': new FormControl('', [
				Validators.required,
				Validators.minLength(5),
				Validators.pattern("^[0-9+]*$")
		  	])
		}); 
	}
	
	get name() { return this.orderForm.get('name'); }
	get phone() { return this.orderForm.get('phone'); }
}
