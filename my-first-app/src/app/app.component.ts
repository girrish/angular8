import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  // styles: ['h3{color:blue;}'],
  styles: [`
    h3 {
      color: #337ab7;
    }
    .text-white {
      color: white;
    }
  `]
})
export class AppComponent {
  showDetails = false;
  logs = [];

  onButtonClick() {
    this.showDetails = !this.showDetails;
    // this.logs.push(this.logs.length + 0);
    this.logs.push(new Date());
  }
}
