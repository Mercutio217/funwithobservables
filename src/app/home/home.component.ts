import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Observer} from 'rxjs/Observer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const myNums = Observable.interval(1000);
    // myNums.subscribe(
    //   (number: number) => console.log(number)
    // );

    const myObservable = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => observer.next('first package'), 2000);
        setTimeout(() => observer.next('second package'), 4000);
        setTimeout(() => observer.error('terminate'), 5000);
      });
    myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => console.log('completed')
    );

  }

}
