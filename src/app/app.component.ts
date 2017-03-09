import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { DemosModel, Demo } from './routes.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  subscription: FirebaseListObservable<any[]>;
  demos: Demo[] = DemosModel.slice();
  init: boolean = false;

  constructor(
    private af: AngularFire,
    private router: Router
  ) {
    this.demos.push({
      alias: 'home',
      title: '',
      description: '',
      link: ['/']
    });
  }

  ngOnInit() {
    this.subscription = this.af.database.list('requests', {
      query: {
        orderByChild: 'timestamp',
        limitToLast: 1
      }
    });
    this.subscription.subscribe(res => {
      const result = (res[0]) ? res[0].result : false;

      if (this.init && result && result.action === 'navigate') {
        const route: Demo = this.demos.find(demo => {
          return demo.alias === result.parameters.pages;
        });
        if (route) {
          this.router.navigate(route.link);
        }
      }
      this.init = true;
    });
  }
}
