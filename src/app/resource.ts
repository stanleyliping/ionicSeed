import { Directive } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Directive({
    selector: '[log]'
})
export class WapSettings {

    appIdentity='wsmpmobile';//1.4

    apiPrefix='http://128.1.1.4:8000/Api/wsmp/v1/Mobile/';
    router = {//Api文档信息
        wsmpMobileOAuthRes: {
            userLogOn: {
                method: 'get',
                url: this.apiPrefix+'user/logOn',
                params: {
                    userIdentity: '',
                    password: '',
                    appIdentity: ''
                }
            },
            userLogOut: {
                method: 'POST',
                url: this.apiPrefix+'user/logOut',
                params: {
                    token: ''
                }
            },
            getUserAuth: {
                method: 'GET',
                url: this.apiPrefix+'user/getAuth',
                params: {
                    token: '@token',
                    appIdentity: '@appIdentity'
                }
            },
        },
    };
    Menu=[{
                funcCode: 'MOBILE_ZYSJ',
                realRouter: '/event',
                menuIndex: 7,
                Image: '../../assets/image/IMPORTANT_EVENT.png',
            }, {
                funcCode: 'MOBILE_SSJC',
                realRouter: '/monitor',
                menuIndex: 2,
                Image: '../../assets/image/MONITOR_INTIME.png',
            }
            , {
                funcCode: 'MOBILE_KPIXX',
                // realRouter: '/about',
                realRouter: '/kpi',
                menuIndex: 1,
                Image: '../../assets/image/KPI_INFO.png'
            }, {
                funcCode: 'MOBILE_DTCK_GIS',
                realRouter: '/arcmap',
                menuIndex: 4,
                Image: '../../assets/image/MAP_SHOW.png'
            }, {
                funcCode: 'MOBILE_DTCK_BD',
                realRouter: '/map',
                menuIndex: 4,
                Image: '../../assets/image/MAP_SHOW.png'
            }, {
                funcCode: 'MOBILE_RLT',
                realRouter: '/thermodynamic',
                menuIndex: 8,
                Image: '../../assets/image/MAP_SHOW.png'
            }, {
                funcCode: 'MOBILE_XZT',
                realRouter: '/drilldown',
                menuIndex: 9,
                Image: '../../assets/image/MONITOR_INTIME.png'
            }, {
                funcCode: 'MOBILE_CZZL',
                realRouter: '/station',
                menuIndex: 3,
                Image: '../../assets/image/ALL_STATIONS.png'
            }, {
                funcCode: 'MOBILE_BJCX',
                realRouter: '/alarmSearch',
                menuIndex: 5,
                Image: '../../assets/image/ALARM_SEARCH.png'
            }, {
                funcCode: 'MOBILE_YLLB',
                realRouter: '/pressure',
                menuIndex: 6,
                Image: '../../assets/image/MONITOR_INTIME.png'
            }, {
                funcCode: 'MOBILE_FQXX',
                realRouter: '/DMAinfo',
                menuIndex: 10,
                Image: '../../assets/image/ALL_STATIONS.png'
            }, {
                funcCode: 'MOBILE_JLXX',
                realRouter: '/calculation',
                menuIndex: 11,
                Image: '../../assets/image/ALL_STATIONS.png'
            }

        ];

    public DoPost = (url: string, param: any) => {
        return this.http.post(url, param);
    }

    public DoGet=(url: string, param: any)=>{
        if(param&&param.length>0){
            for(let i=0;i<param.length;i++){
                url=url+'/'+param[i];
            }
        }else{}
        return this.http.get(url);
    }

    constructor(public http: Http) {
    }

}
