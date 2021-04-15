import { Component, OnInit } from '@angular/core';
import { HttpCommunicatorService, ProductJson, Products } from '../http-communicator.service';

@Component({
  selector: 'app-new-orders',
  templateUrl: './new-orders.component.html',
  styleUrls: ['./new-orders.component.scss']
})
export class NewOrdersComponent implements OnInit {

  public products: Products[] = [];

  constructor(private httpCommunicator: HttpCommunicatorService) { }

  ngOnInit() {
    this.httpCommunicator.getProduct().subscribe(
      (res: ProductJson) => {
        console.log(res);
        if (res) {
          this.products = res.products;
        }
      }
    );
  }

}
