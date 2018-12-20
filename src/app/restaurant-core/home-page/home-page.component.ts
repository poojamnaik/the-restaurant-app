import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';


import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http:HttpClient, private userService: UserService) { }
  users: User[] = [];
  restaurantList:any[] = new Array()  ;

  ngOnInit() {

    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
  });

    this.restaurantList=[
      {
          "location": {
              "address": "1 5th Avenue, New York, NY 10003",
              "locality": "Greenwich Village",
              "city": "New York City",
              "latitude": "40.732013",
              "longitude": "-73.996155",
              "zipcode": "+010002-12-31T18:30:00.000Z",
              "country_id": "0215-12-31T18:06:32.000Z"
          },
          "user_rating": {
              "aggregate_rating": "2001-03-06T18:30:00.000Z",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "1046-01-01T00:00:00.000Z"
          },
          "photos": [
              {
                  "id": "u_MjA5MjY1OTk5OT",
                  "url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_640_640_thumb.JPG",
                  "thumb_url": "https://b.zmtcdn.com/data/pictures/5/53165/c901eb89bf07f2b20cebc948bc7a284d_featured_v2.jpg",
                  "user": {
                      "name": "John Doe",
                      "zomato_handle": "John",
                      "foodie_level": "Super Foodie",
                      "foodie_level_num": "9",
                      "foodie_color": "f58552",
                      "profile_url": "https://www.zomato.com/john",
                      "profile_deeplink": "zoma.to/u/1170245",
                      "profile_image": "string"
                  },
                  "res_id": "16782899",
                  "caption": "#awesome",
                  "timestamp": "1435111770",
                  "friendly_time": "3 months ago",
                  "width": "640",
                  "height": "640",
                  "comments_count": "0",
                  "likes_count": "0"
              }
          ],
          "all_reviews": [
              {
                  "rating": "5",
                  "review_text": "The best latte I've ever had. It tasted a little sweet",
                  "id": "24127336",
                  "rating_color": "305D02",
                  "review_time_friendly": "2 months ago",
                  "rating_text": "Insane!",
                  "timestamp": "1435507367",
                  "likes": "0",
                  "user": {
                      "name": "John Doe",
                      "zomato_handle": "John",
                      "foodie_level": "Super Foodie",
                      "foodie_level_num": "9",
                      "foodie_color": "f58552",
                      "profile_url": "https://www.zomato.com/john",
                      "profile_deeplink": "zoma.to/u/1170245",
                      "profile_image": "string"
                  },
                  "comments_count": "0"
              }
          ],
          "_id": "5c18df182226694ac41fb7ff",
          "id": "16774318",
          "name": "Otto Enoteca & Pizzeria",
          "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
          "average_cost_for_two": "1959-12-31T18:30:00.000Z",
          "price_range": "2001-01-31T18:30:00.000Z",
          "currency": "$",
          "thumb": "https://b.zmtcdn.com/data/pictures/5/53165/c901eb89bf07f2b20cebc948bc7a284d_featured_v2.jpg",
          "featured_image": "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
          "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
          "menu_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
          "events_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
          "has_online_delivery": "1999-12-31T18:30:00.000Z",
          "is_delivering_now": "1999-12-31T18:30:00.000Z",
          "has_table_booking": "1999-12-31T18:30:00.000Z",
          "deeplink": "zomato://r/16774318",
          "cuisines": "Cafe",
          "all_reviews_count": "15",
          "photo_count": "18",
          "phone_numbers": "(212) 228-2930",
          "__v": 0
      },
      {
          "location": {
              "address": "1 5th Avenue, New York, NY 10003",
              "locality": "Greenwich Village",
              "city": "New York City",
              "latitude": "40.732013",
              "longitude": "-73.996155",
              "zipcode": "+010002-12-31T18:30:00.000Z",
              "country_id": "0215-12-31T18:06:32.000Z"
          },
          "user_rating": {
              "aggregate_rating": "2001-03-06T18:30:00.000Z",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "1046-01-01T00:00:00.000Z"
          },
          "photos": [
              {
                  "id": "u_MjA5MjY1OTk5OT",
                  "url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_640_640_thumb.JPG",
                  "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_200_thumb.JPG",
                  "user": {
                      "name": "John Doe",
                      "zomato_handle": "John",
                      "foodie_level": "Super Foodie",
                      "foodie_level_num": "9",
                      "foodie_color": "f58552",
                      "profile_url": "https://www.zomato.com/john",
                      "profile_deeplink": "zoma.to/u/1170245",
                      "profile_image": "string"
                  },
                  "res_id": "16782899",
                  "caption": "#awesome",
                  "timestamp": "1435111770",
                  "friendly_time": "3 months ago",
                  "width": "640",
                  "height": "640",
                  "comments_count": "0",
                  "likes_count": "0"
              }
          ],
          "all_reviews": [
              {
                  "rating": "5",
                  "review_text": "The best latte I've ever had. It tasted a little sweet",
                  "id": "24127336",
                  "rating_color": "305D02",
                  "review_time_friendly": "2 months ago",
                  "rating_text": "Insane!",
                  "timestamp": "1435507367",
                  "likes": "0",
                  "user": {
                      "name": "John Doe",
                      "zomato_handle": "John",
                      "foodie_level": "Super Foodie",
                      "foodie_level_num": "9",
                      "foodie_color": "f58552",
                      "profile_url": "https://www.zomato.com/john",
                      "profile_deeplink": "zoma.to/u/1170245",
                      "profile_image": "string"
                  },
                  "comments_count": "0"
              }
          ],
          "_id": "5c18df762226694ac41fb800",
          "name": "Otto Enoteca & Pizzeria",
          "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
          "average_cost_for_two": "1959-12-31T18:30:00.000Z",
          "price_range": "2001-01-31T18:30:00.000Z",
          "currency": "$",
          "thumb": "https://b.zmtcdn.com/data/pictures/5/53165/c901eb89bf07f2b20cebc948bc7a284d_featured_v2.jpg",
          "featured_image": "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
          "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
          "menu_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
          "events_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
          "has_online_delivery": "1999-12-31T18:30:00.000Z",
          "is_delivering_now": "1999-12-31T18:30:00.000Z",
          "has_table_booking": "1999-12-31T18:30:00.000Z",
          "deeplink": "zomato://r/16774318",
          "cuisines": "Cafe",
          "all_reviews_count": "15",
          "photo_count": "18",
          "phone_numbers": "(212) 228-2930",
          "__v": 0
      },
      {
          "location": {
              "address": "1 5th Avenue, New York, NY 10003",
              "locality": "Greenwich Village",
              "city": "New York City",
              "latitude": "40.732013",
              "longitude": "-73.996155",
              "zipcode": "+010002-12-31T18:30:00.000Z",
              "country_id": "0215-12-31T18:06:32.000Z"
          },
          "user_rating": {
              "aggregate_rating": "2001-03-06T18:30:00.000Z",
              "rating_text": "Very Good",
              "rating_color": "5BA829",
              "votes": "1046-01-01T00:00:00.000Z"
          },
          "photos": [
              {
                  "id": "u_MjA5MjY1OTk5OT",
                  "url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_640_640_thumb.JPG",
                  "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_200_thumb.JPG",
                  "user": {
                      "name": "John Doe",
                      "zomato_handle": "John",
                      "foodie_level": "Super Foodie",
                      "foodie_level_num": "9",
                      "foodie_color": "f58552",
                      "profile_url": "https://www.zomato.com/john",
                      "profile_deeplink": "zoma.to/u/1170245",
                      "profile_image": "string"
                  },
                  "res_id": "16782899",
                  "caption": "#awesome",
                  "timestamp": "1435111770",
                  "friendly_time": "3 months ago",
                  "width": "640",
                  "height": "640",
                  "comments_count": "0",
                  "likes_count": "0"
              }
          ],
          "all_reviews": [
              {
                  "rating": "5",
                  "review_text": "The best latte I've ever had. It tasted a little sweet",
                  "id": "24127336",
                  "rating_color": "305D02",
                  "review_time_friendly": "2 months ago",
                  "rating_text": "Insane!",
                  "timestamp": "1435507367",
                  "likes": "0",
                  "user": {
                      "name": "John Doe",
                      "zomato_handle": "John",
                      "foodie_level": "Super Foodie",
                      "foodie_level_num": "9",
                      "foodie_color": "f58552",
                      "profile_url": "https://www.zomato.com/john",
                      "profile_deeplink": "zoma.to/u/1170245",
                      "profile_image": "string"
                  },
                  "comments_count": "0"
              }
          ],
          "_id": "5c18dfa753549b4a44bc0184",
          "refId": "16774318",
          "name": "Otto Enoteca & Pizzeria",
          "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
          "average_cost_for_two": "1959-12-31T18:30:00.000Z",
          "price_range": "2001-01-31T18:30:00.000Z",
          "currency": "$",
          "thumb": "https://b.zmtcdn.com/data/pictures/5/53165/c901eb89bf07f2b20cebc948bc7a284d_featured_v2.jpg",
          "featured_image": "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
          "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
          "menu_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
          "events_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
          "has_online_delivery": "1999-12-31T18:30:00.000Z",
          "is_delivering_now": "1999-12-31T18:30:00.000Z",
          "has_table_booking": "1999-12-31T18:30:00.000Z",
          "deeplink": "zomato://r/16774318",
          "cuisines": "Cafe",
          "all_reviews_count": "15",
          "photo_count": "18",
          "phone_numbers": "(212) 228-2930",
          "__v": 0
      }
  ]
    // this.http.get<any[]>('/restaurant').subscribe(data => {
    //   this.restaurantList =data;
    //   console.log(JSON.stringify(data))
    // });
  }

}
