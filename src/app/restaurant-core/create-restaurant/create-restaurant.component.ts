import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Restaurant } from '../../models/restaurant';
import { Location } from '../../models/location';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

  restaurant: Restaurant = new Restaurant();
  location: Location = new Location();
  @Output() restaurantAdded = new EventEmitter();

  constructor(private http: HttpClient,
    private router: Router
  ) { }

  dataSaved = false;

  ngOnInit() {
    this.dataSaved = false;
  }

  saveRestaurant() {
    this.restaurant.location = this.location;
    this.http.post('/restaurant', this.restaurant)
      .subscribe(res => {
        console.log('restaurant  is saved successfully');
        this.dataSaved = true;
        this.restaurantAdded.emit(res);
        // this.router.navigate(['/home-page']);
      }, (err) => {
        console.log(err);
      }
      );
  }
  resetForm() {
    this.dataSaved = false;
    this.restaurant = new Restaurant();
  }
}
