import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RemoteAPIService } from 'src/app/services/remote-api.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {


  public item: any;

  constructor(
    private service: RemoteAPIService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.item = {};
    this.route.params.subscribe(params => {
      const id = params.id;
      this.getData(id);
    });
  }

  async getData(id: string) {
    const data = await this.service.getOne(id);
    this.item = data.result;
  }

}
