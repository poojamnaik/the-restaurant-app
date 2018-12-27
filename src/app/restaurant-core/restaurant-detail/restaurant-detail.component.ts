import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute }  from '@angular/router';
import { HttpClient} from '@angular/common/http';
import { Restaurant } from 'src/app/models/restaurant';

@Component({
  selector: 'app-restaurant-detail-component',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {console.log('Inside ng init : '+this.route.snapshot.params['id'])
    this.getBookDetail(this.route.snapshot.params['id']);
  }
  restaurant:Restaurant = new Restaurant();

  getBookDetail(id) {
   console.log('Inside get restaurant detail');
    this.http.get<Restaurant>('/restaurant/'+id).subscribe(data => {
      this.restaurant = data;
    });
  }

  deleteBook(id) {
    this.http.delete('/restaurant/'+id)
      .subscribe(res => {
          this.router.navigate(['/app/restaurants']);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
