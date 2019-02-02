import { Injectable } from '@angular/core';



import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class OrdersService {
  public currentId: string;
  // Inject HttpClient into your component or service.
  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<any> {

    return  this.http.get('http://foodie.aqarmap.net/api/orders/118');
       }

       public addItem(id): Observable<{}> {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/json'
          })
        };
        const url = `http://foodie.aqarmap.net/api/orders/118/items/${id}?user_id=2`;
         console.log('from service' + id);
        return  this.http.post(url, []);
         // console.log(url);
       }
       public deleteItem(id): Observable<{}> {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type':  'application/xml'
          })
        };
        const url = `http://foodie.aqarmap.net/api/orders/118/items/${id}?user_id=2`;
        return this.http.delete(url);
       }
}
