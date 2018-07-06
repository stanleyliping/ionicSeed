import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	styleUrls: ['home.scss']
})
export class HomePage implements OnInit {
	hero = {
		id: 1,
		name: 'Windstorm'
	};
	// loading.present();//loading开始
	// setTimeout(() => {
	//   loading.dismiss();//loading结束
	// }, 5000);
	constructor() { }

	ngOnInit() {
	}

}
