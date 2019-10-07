import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { AddItemPage } from '../add-item/add-item.page';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {

  public items = [];

  data = '';

  constructor(public activatedRoute : ActivatedRoute, private authService: AuthService, private storage: Storage, private toastController: ToastController, private route: Router) {

    this.activatedRoute.queryParams.subscribe((res)=>{
      if(Object.keys(res).length != 0) {
          this.items.push(res);
        }
    });
   }

  ngOnInit() {
  }

  addItem() {
    this.route.navigate(['/add-item']);
  }

  loadSpecialInfo() {
    this.authService.getSpecialData().subscribe(res => {
      this.data = res['msg'];
    });
  }

  logout() {
    this.authService.logout();
  }

  clearToken() {
    this.storage.remove('access_token');

    let toast = this.toastController.create({
      message: 'JWT removed',
      duration: 3000
    });
    toast.then(toast => toast.present());
  }

}
