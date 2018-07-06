import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {Router} from '@angular/router'
import { commonService } from '../../service/app.commonService';
import { AuthService } from '../../service/app.wapAuthservice';
import { WapSettings } from '../../app/resource';
import { NavController, NavParams, LoadingController } from 'ionic-angular';


// import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  loginPage = this;
  //声明全局变量并赋值
  title = "用户登录";//页面title
  errorText = '';//错误提示
  success = false;//登录成功标志
  errorCnt = localStorage.getItem('errorCount');//获取登录失败的缓存计数
  credential = {
    username: '',
    password: ''
  }
  date: moment.Moment;


  disabled = false;//定义是否界面上的输入框和按钮被禁用

  // public login = () => {//登录跳转传参测试
  //   this.navCtrl.push(AboutPage, {
  //     test: "aaa"
  //   });
  // }
  public toast = (text) => {
    let loading = this.loadingCtrl.create({
      content: text
    });

  }
  public login = () => {//登录跳转传参测试
    var self = this;
    if (self.credential.username == "" || self.credential.password == "") {
      window.location.reload();
    }

    // 禁用界面元素
    let loading = self.loadingCtrl.create({
      content: '登录中'
    });
    // 定义登录成功或者失败后的操作
    loading.present();


    //判断账户密码是否正确
    var appLoginPromise = self.authService.appLogin(self.credential.username, self.credential.password, self.settings.appIdentity);
    appLoginPromise.then(function(response) {
      response = response.json();
      if (response.data) {
        if (localStorage.getItem('credential')) {
          self.authService.loadAuthorizations()
            .then(function(response) {
              loading.dismiss();
              localStorage.setItem('functions', JSON.stringify(response.json().data));
              // self.navCtrl.push(IndexPage);
              self.router.navigate(['/index']);
            })
            .catch(function(error) {
              loading.dismiss();
              console.log('用户名或密码错误');
              if (Number(self.errorCnt) < 10) {
                self.disabled = false;
                if (Number(self.errorCnt) >= 3)
                  self.errorText = '您已输错' + self.errorCnt + '次，十次后将锁定系统！';
              } else {
                self.errorText = '您已输错十次，系统将锁定30分钟……';
                var expire = moment().add(0.5, 'hour'); //new Date(window.moment().add(1, 'minutes'));
                localStorage.setItem('errorCount', self.errorCnt);
              }
            })
        }
      }
      else {
        loading.dismiss();
        self.errorCnt = (Number(self.errorCnt) + 1).toString();
        localStorage.setItem('errorCount', self.errorCnt);
        if (Number(self.errorCnt) < 10) {
          self.disabled = false;
          if (Number(self.errorCnt) >= 3)
            self.errorText = '您已输错' + self.errorCnt + '次，十次后将锁定系统！';
        } else {
          self.errorText = '您已输错十次，系统将锁定30分钟……';
          var expire = moment().add(0.5, 'hour'); //new Date(window.moment().add(1, 'minutes'));
          localStorage.setItem('errorCount', self.errorCnt);
        }
        // defer.reject(credential);
      }
    }).catch(function(error) {
      // loading.dismiss();
      self.errorCnt = (Number(self.errorCnt) + 1).toString();
      localStorage.setItem('errorCount', self.errorCnt);
      // defer.reject(error);
    })
  }


  condition = {
    startDate: '2018-06-17',
    endDate: '2018-06-18'
  }
  //private navCtrl: NavController,
  constructor(
    private http: Http,
    private loadingCtrl: LoadingController,
    private authService: AuthService,
    private settings: WapSettings,
    private router:Router) {//注入模块
    console.log(moment());
    if (!this.errorCnt) {
      this.errorCnt = "0";
      localStorage.setItem('errorCount', "0");
    }
    if (Number(this.errorCnt) < 10) {
      //$scope.errorText = "请输入正确的用户名和密码";
      // 定义身份认证
      this.credential = {
        username: '',
        password: ''
      };
      this.disabled = false;
      var postUrl = "http://128.1.1.4:11114/Api/lams/v1/exception/exceptionData/selectExceptionDataByCondition";
      let postParam = new URLSearchParams();
      http.post(postUrl, this.condition).subscribe(res => {
        // console.log(res.json());
      })
      http.get("http://128.1.1.4:11113/Api/lams/v1/area/areaInfo/selectAllAreaInfo").subscribe(res => {
        // console.log(res.json().data);
      })
      // this.login();
    }
  }
}
