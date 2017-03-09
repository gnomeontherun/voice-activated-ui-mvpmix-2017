import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { AngularFireModule } from 'angularfire2';

import { SlidesComponent } from './slides.component';

import { environment } from '../../environments/environment';

const slidesRoutes = [
  { path: 'slides', component: SlidesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ClarityModule.forChild(),
    RouterModule.forChild(slidesRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  declarations: [
    SlidesComponent
  ]
})
export class SlidesModule { }
