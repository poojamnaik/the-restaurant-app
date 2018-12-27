import { Component, OnInit } from '@angular/core';
import { Restaurant} from '../../models/restaurant';
import {  Location} from '../../models/location';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-restaurant',
  templateUrl: './edit-restaurant.component.html',
  styleUrls: ['./edit-restaurant.component.css']
})
export class EditRestaurantComponent implements OnInit {

  restaurant:Restaurant = new Restaurant();
  location : Location = new Location();
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }
   id:number;
  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.getRestaurant(this.id);
  }

  getRestaurant(id) {
    this.http.get<Restaurant>('/restaurant/'+id).subscribe(data => {
      this.restaurant = data;
      this.location=this.restaurant.location;
    });
  }

  updateRestaurant() {
    this.http.put('/restaurant/'+this.id, this.restaurant)
      .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/app/restaurant-details', id]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
