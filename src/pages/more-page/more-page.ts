import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../person/person';
import { Focus } from '../focus/focus';
import { Collect } from '../collect/collect';
import { MyShare } from '../my-share/my-share';
import { MyQuestion } from '../my-question/my-question';
import { MyWork } from '../my-work/my-work';
import { Login } from '../login/login';
import { Setting } from '../setting/setting';
import { UserService } from '../../service/user.service';

/**
 * Generated class for the MorePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-more-page',
  templateUrl: 'more-page.html',
})
export class MorePage {

  name:any='';
  mimg:any='';

  constructor(public navCtrl: NavController, public navParams: NavParams, public UserService: UserService) {
    this.init();
  }

  init(){
    this.name = this.UserService._user.name;
    this.mimg = this.UserService._user.img;
  }

  ionViewDidEnter() {
    this.init();
  }

  pushPerson(){
    //this.checkLogin( Person );
    this.navCtrl.push( Person );
  }

  pushFocusPage(){
    //this.checkLogin( Focus );
    this.navCtrl.push( Focus );
  }

  pushCollectPage(){
    //this.checkLogin( Collect );
    this.navCtrl.push( Collect );
  }

  pushMySharePage(){
    //this.checkLogin( MyShare );
    this.navCtrl.push( MyShare );
  }

  pushMyQuestionPage(){
    //this.checkLogin( MyQuestion );
    this.navCtrl.push( MyQuestion );
  }

  pushMyWorkPage(){
    //this.checkLogin( MyWork );
    this.navCtrl.push( MyWork );
  }

  pushSettingPage(){
    this.navCtrl.push( Setting );
  }

  clear(){
    this.UserService.clearStorage();
    alert("清除用户缓存成功！");
  }

  //检查登录状态
  checkLogin(page){
    //alert(this.UserService._user.id);
    if(this.UserService._user.id){
      this.navCtrl.push( page );
    }else{
      this.navCtrl.push( Login );
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MorePage');
  }

}
