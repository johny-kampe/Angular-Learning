import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ang-routing';

  constructor(private router: Router){}

  ngOnInit(): void {
    const obsTest$ = new Observable(observer => {
      observer.next('Returned From Observable');
    }).subscribe(value => {
      console.log(value);
    });

    obsTest$.unsubscribe();
    
    const obsTest = function() {
      return('Printed From Function!'); 
    }
    obsTest();
  }

  onSubmit(){ //Navigate Programmatically
    // this.router.navigate(['/posts'])
    // this.router.navigate(['/post', 1, 'postTitle'])
    this.router.navigate(['/posts'], {queryParams: {page:1, order: 'newest'}})
  }
}
