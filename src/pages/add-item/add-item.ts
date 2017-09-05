import { Component } from '@angular/core';
import { NavController, ViewController  } from 'ionic-angular';

/**
 * Generated class for the AddItemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
	title;
	description;
  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }
  
  saveItem(){
     let newItem = {
      title: this.title,
      description: this.description
    };
     this.view.dismiss(newItem);
   }
   close(){
    this.view.dismiss();
  }

}
