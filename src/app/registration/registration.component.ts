import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../models/user';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient,
    private router : Router) { }

  user = new User;
  ngOnInit() {
  }

  saveUser() {
    this.user.role= 'customer';
    this.http.post('/users/register', this.user)
        .subscribe(res => {
            let id = res['_id'];
            console.log('User is saved successfully')
              this.router.navigate(['/login']);
        }, (err) => {
            console.log(err);
        }
        );
}
}
