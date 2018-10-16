import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  book = {};

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBook(this.route.snapshot.params['id']);
  }

  getBook(id) {
    this.http.get('/book/' + id).subscribe(data => {
      this.book = data;
    });
  }

  updateBook(id, data) {
    debugger;
    this.http.put('/book/' + id, data)
      .subscribe(res => {
          const newId = res['_id'];
          this.router.navigate(['/book-details', newId]);
        }, (err) => {
          console.log(err);
        }
      );
  }

}
