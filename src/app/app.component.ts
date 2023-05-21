import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstMediaItem = {
    id : 1,
    name: "Firebug",
    medium: 'Series',
    category: 'Science Fiction',
    year : 2019,
    watchedOn: "2020",
    isFavorite: false,
  }
  onMediaItemDelete(){

  }
}
 
