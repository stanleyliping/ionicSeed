import { Component, NgModule } from '@angular/core';
import { WapSettings } from '../../app/resource';
import { Router } from '@angular/router'

@Component({
	selector: 'page-index',
	templateUrl: 'index.html'
})
export class IndexPage {
	public Function() {
		let funcCode;
		let realRouter;
		let Image;
		let menuIndex;
	};
	public testFun;
	public a = 111;

	public menuClick = (realRouter) => {
		let self = this;
		self.router.navigate([realRouter]);
	}

	public back = () => {
		let self = this;
		self.router.navigate(['login']);
	}


	constructor(private settings: WapSettings,
		private router: Router) {
		let self = this;
		let functionJson = JSON.parse(localStorage.getItem('functions'));

		try {
			if (functionJson && functionJson.length != 0) {
				//self.fuclist=JSON.parse(fucsString);
				for (var i = 0; i < functionJson.length; i++) {
					for (var j = 0; j < this.settings.Menu.length; j++) {
						if (settings.Menu[j].funcCode == functionJson[i].funcCode) {
							functionJson[i].realRouter = settings.Menu[j].realRouter;
							functionJson[i].Image = settings.Menu[j].Image;
							functionJson[i].menuIndex = settings.Menu[j].menuIndex;
						}
					}

				}
				functionJson.sort(function(a, b) {
					return a.menuIndex - b.menuIndex;
				});
			}
		} catch (e) { console.log(e); }
		this.testFun = functionJson;
		console.log(this.testFun);

	}
}
