import { Directive } from '@angular/core';
import { Http } from '@angular/http';
import { WapSettings } from '../app/resource';
import * as moment from 'moment';
@Directive({
	selector: '[log]'
})
export class commonService {
	

	constructor(public settings: WapSettings, public http: Http) {}

}
