import { Component, OnInit } from '@angular/core';
import { RemoteAPIService } from 'src/app/services/remote-api.service';
import { IItem } from 'src/app/services/remote-api.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.page.html',
  styleUrls: ['./item-form.page.scss'],
})
export class ItemFormPage implements OnInit {

  public item: IItem;

  constructor(
    private router: Router,
    private service: RemoteAPIService,
    public alertController: AlertController) { }

  ngOnInit() {
    this.item = {
      created_on: 0,
      customer_id: '',
      id: '',
      order_items: [{}],
      restaurant_id: '',
      status: ''
    };
  }

  async save() {
    const res = await this.service.post(this.item);
    const alert = await this.alertController.create({
      header: 'ACTION COMPLETED',
      subHeader: '',
      message: JSON.stringify(res),
      buttons: ['OK']
    });
    await alert.present();
    this.router.navigate(['item-list']);
  }
}
