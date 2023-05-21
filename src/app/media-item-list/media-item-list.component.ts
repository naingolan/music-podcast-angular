import { Component } from '@angular/core';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent {
  mediaItems=[
  {
    id:2,
    name:'The last airbender',
    medium:'Movies',
    category:'Science Fiction',
    year: 2021,
    watchedOn: 2022,
    isFavorite: false
  },
  {
    id:3,
    name:'Puss in boots Last wish',
    medium:'Series',
    category:'Mkono',
    year: 2021,
    watchedOn: 2022,
    isFavorite: true
  },
  {
    id:4,
    name:'Ice Age',
    medium:'Movies',
    category:'Drama',
    year: 2021,
    watchedOn: 2022,
    isFavorite: true,
  },


  ]
}
