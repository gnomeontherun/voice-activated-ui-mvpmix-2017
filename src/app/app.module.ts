import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { AngularFireModule } from 'angularfire2';

import { DatabankModule } from './databank/databank.module';
import { SlidesModule } from './slides/slides.module';

import { AppComponent } from './app.component';
import { DemosComponent } from './demos/demos.component';

import { environment } from '../environments/environment';

const appRoutes = [
  { path: '', component: DemosComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),

    DatabankModule,
    SlidesModule,

    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
