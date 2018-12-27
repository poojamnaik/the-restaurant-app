import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';


import { User } from '../../models/user';
import { Restaurant} from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http:HttpClient, private restaurantService: RestaurantService) { }
  users: User[] = [];
  restaurantList:Restaurant[] = new Array()  ;

  ngOnInit() {

    this.restaurantService.getAll().pipe(first()).subscribe(restaurants => {
      this.restaurantList = restaurants;
      console.log(JSON.stringify(restaurants));
  });
  }
   addNewRestaurant(restaurantCreated){
    console.log('Isnide qadnew resatuarant '+JSON.stringify(event));
    this.restaurantList.push(restaurantCreated);
  }

//   this.restaurantList=[
//     {
//         "location": {
//             "address": "1 5th Avenue, New York, NY 10003",
//             "locality": "Greenwich Village",
//             "city": "New York City",
//             "latitude": "40.732013",
//             "longitude": "-73.996155",
//             "zipcode": "+010002-12-31T18:30:00.000Z",
//             "country_id": "0215-12-31T18:06:32.000Z"
//         },
//         "refId": "16774318",
//         "name": "Otto Enoteca & Pizzeria",
//         "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
//         "average_cost_for_two": "1959-12-31T18:30:00.000Z",
//         "price_range": "2001-01-31T18:30:00.000Z",
//         "thumb": "https://b.zmtcdn.com/data/pictures/5/53165/c901eb89bf07f2b20cebc948bc7a284d_featured_v2.jpg",
//         "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
//         "has_online_delivery": "1999-12-31T18:30:00.000Z",
//         "is_delivering_now": "1999-12-31T18:30:00.000Z",
//         "cuisines": "Cafe",
//         "all_reviews_count": "15",
//     }
// ]
//     // this.http.get<any[]>('/restaurant').subscribe(data => {
    //   this.restaurantList =data;
    //   console.log(JSON.stringify(data))
    // });
  

}
