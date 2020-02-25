import { Injectable } from '@angular/core';

export interface IItem {
  id: string;
  customer_id: string;
  status: string;
  created_on: number,
  restaurant_id: string;
  order_items: any[],
}


@Injectable({
  providedIn: 'root'
})
export class RemoteAPIService {

  readonly APIURL = `https://up-company.dev/dev-gokit-base/api/v1/orders`;

  async get() {
    const options: RequestInit = {
      method: 'GET'
    };
    const res: Response = await fetch(this.APIURL, options);

    if (res.status === 200) {
      return await res.json();
    }

    return [];
  }

  async getOne(id: string) {
    const options: RequestInit = {
      method: 'GET'
    };
    const res: Response = await fetch(`${this.APIURL}/id/${id}`, options);

    if (res.status === 200) {
      return await res.json();
    }

    return {};
  }

  async post(item: IItem) {
    console.log(JSON.stringify(item));

    const options: RequestInit = {
      method: 'POST',
      body: JSON.stringify(item)
    };
    const res: Response = await fetch(`${this.APIURL}`, options);

    if (res.status === 200) {
      return await res.json();
    }

    return [];
  }
}
