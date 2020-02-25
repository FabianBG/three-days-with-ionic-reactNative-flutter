import { Component, OnInit } from '@angular/core';
import { RemoteAPIService } from 'src/app/services/remote-api.service';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.page.html',
  styleUrls: ['./item-list.page.scss'],
})
export class ItemListPage implements OnInit {

  private readonly defaultShow = 10;
  private show;
  public items: any[];
  public showLabel;

  constructor(
    private service: RemoteAPIService,
    private scaner: BarcodeScanner,
    private router: Router) {
    this.items = [];
    this.show = this.defaultShow;
    this.showLabel = 'Show all';
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    const data = await this.service.get();

    if (this.show === -1) {
      this.showLabel = 'Hide all';
      this.items = data.result.reverse();
    } else {
      this.showLabel = 'Show all';
      this.items = data.result.reverse().splice(0, this.show);
    }
  }

  showToggle() {
    this.show = this.show === -1 ? this.defaultShow : -1;
    this.getData();
  }

  goToDetail(item: any) {
    this.router.navigate(['/item-detail', item.id]);
  }


  initScaner() {
    this.scaner.scan().then(data => {
      console.log(data);

      this.router.navigate(['/item-detail', data.text]);
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
