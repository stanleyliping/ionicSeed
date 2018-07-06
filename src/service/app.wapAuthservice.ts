import { Directive } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs/add/operator/toPromise';
import { WapSettings } from '../app/resource';
import * as moment from 'moment';
@Directive({
	selector: '[log]'
})
export class AuthService {
	testName = 'Liping';//测试属性
	wsmpMobileOAuthRes = this.settings.router.wsmpMobileOAuthRes;

	public _login = (loginInfo, auth) => {
		let promise: Promise<any>;
		promise = this.settings.DoGet(this.wsmpMobileOAuthRes.userLogOn.url, loginInfo).toPromise();
		promise.then(function(response) {
			console.log(20);
			console.log(response.json());
			response=response.json();
			console.log(response);
			if (response.data) {
				// 记录更新成功时间
				response.ActiveTime = moment().format();
				// 用户登陆成功，保存登陆用户证书并跳转
				console.log(25);
				console.log(response.data);
				auth.setCredential(response.data);
				// 用户登录成功，发送消息
				// $rootScope.$broadcast('WSMP_USER_LOGON', response.data);
			}

		});
		return promise;
	}

	public appLogin = (userName, password, appIdentity) => {
		/// <summary>
		/// 用户登陆
		/// </summary>            
		/// <param name="userName">用户名</param>
		/// <param name="password">密码</param>
		/// <param name="appIdentity">应用标识</param>

		let loginInfo =[];
		loginInfo.push(userName,password,appIdentity); 

		return this._login(loginInfo, this);

	};

	public loadAuthorizations = () => {
		console.log(11);
		/// <summary>
		/// 加载当前用户的所有功能点授权信息
		/// </summary>
		let promise: Promise<any>;
		console.log(16);
		var authorizations = localStorage.getItem('authorizations');
		if (authorizations) {
		} else {
			console.log(20);
			var credential = this.getCredential();
			var dicAuthorizes = [];
			if (credential) {
				let params=[];
				params.push(credential.token,this.settings.appIdentity);
				promise = this.settings.DoGet(this.wsmpMobileOAuthRes.getUserAuth.url,params).toPromise();
				promise.then(function(response) {
					console.warn(30);
					if (response.json().data.length > 0) {
						var functions = response.json().data;
						console.log('service row 72 ');
						console.log(response.json().data);
						// var keys = $.map(functions, function(f) {
						// 	if (f.funcActive)
						// 		return f.funcCode
						// });
						//  defer.then(function(){alert('完成')})
						// var dicFunctions = _.zipObject(keys, functions);
						// localStorage.setItem('authorizations', dicFunctions);
					}
				});
			}
		}
		console.log(46);
		return promise;
	};

	public getCredential = () => {
		/// <summary>
		/// 获取登陆用户证书
		/// </summary>
		/// <return>
		/// 如果已经有用户登陆则返回登陆用户证书，否则返回NULL
		/// </return>

		return JSON.parse(localStorage.getItem('credential'));
	}
	public setCredential = (credential) => {
		console.log(99);
		console.log(credential);
		/// <summary>
		/// 设置登陆用户证书
		/// </summary>
		/// <param name="credential">登陆用户证书</param>

		if (credential && credential !== null) {
			localStorage.setItem('credential', JSON.stringify(credential));
		}
	};
	public removeCredential = () => {
		/// <summary>
		/// 清除登陆用户证书
		/// </summary>
		localStorage.removeItem('credential');
	};


	constructor(public settings: WapSettings, public http: Http) { }

}
