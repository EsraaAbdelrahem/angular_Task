
import { Component, OnInit, SimpleChanges } from '@angular/core';
import {Router} from '@angular/router';
import { OrdersService } from '../data/services/Orders.service';


@Component({
  selector: 'app-papajhons-menu',
  templateUrl: './papajhons-menu.component.html',
  styleUrls: ['./papajhons-menu.component.scss']
})
export class PapajhonsMenuComponent implements OnInit {

  public  orderitems: [{
    id: string,
    name: string,
    price: string,
    quantity: string,
  }];
  constructor(private router: Router, public orders: OrdersService) {
  }

  ngOnInit() {
    this.orders.getAll().subscribe(resp => {
      console.log(resp['order_items']);
      this.orderitems = resp['order_items'];
      resp['order_items'].forEach(element => {
       var id: string = element['id'].toString();
       var name: string = element['name'].toString();
       var price: string = element['price'].toString();
       var quantity: string = element['quantity'].toString();
        console.log('the elemet id' + element['id'].toString());
        this.orderitems.push({id: id, name: name, price: price, quantity: quantity});
      });
    });
    // console.log("aaa"+ this.orders.getAll()[0][3]);
  }
  public addItem(id) {
    this.orders.addItem(id).subscribe(
      (data) => {
        console.log(data);

        this.ngOnInit();

      }), (err) => {console.log('Error');};


  }
  public removeItem(id) {
    this.orders.deleteItem(id).subscribe(
      (data) => {
        console.log(data);

        this.ngOnInit();

      }),
      err => {console.log('Error');
};


}
}
