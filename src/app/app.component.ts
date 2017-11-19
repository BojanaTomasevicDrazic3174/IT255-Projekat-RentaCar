import { Component } from '@angular/core';
import {DataService} from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './router.html'
})
export class AppComponent {
constructor( private dataSer:DataService) { }


  ngOnInit() {
}
}
