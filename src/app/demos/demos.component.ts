import { Component } from '@angular/core';
import { DemosModel, Demo } from '../routes.model';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.css']
})
export class DemosComponent {
  demos: Demo[] = DemosModel;
}
