import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { AngularFireModule } from 'angularfire2';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { DatabankComponent } from './databank.component';

import { environment } from '../../environments/environment';

const databankRoutes = [
  { path: 'databank', component: DatabankComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule.forChild(),
    NgxChartsModule,
    RouterModule.forChild(databankRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  declarations: [
    DatabankComponent
  ]
})
export class DatabankModule { }
