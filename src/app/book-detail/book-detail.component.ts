import { Component, OnInit,  ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BookDetailComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {console.log('Inside ng init : '+this.route.snapshot.params['id'])
    this.getBookDetail(this.route.snapshot.params['id']);
  }
  book = {};

  getBookDetail(id) {
   console.log('Inside get book detail');
    this.http.get('/book/'+id).subscribe(data => {
      this.book = data;
    });
  }

  deleteBook(id) {
    this.http.delete('/book/'+id)
      .subscribe(res => {
          this.router.navigate(['/app/books']);
        }, (err) => {
          console.log(err);
        }
      );
  }
}
