import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit {
mockCover: TrackModel = {
  cover: 'https://pics.filmaffinity.com/Coldplay_Clocks_Music_Video-901862210-large.jpg',
  album: 'BEBE',
  name: 'Clocks(official)',
  url: 'http://localhost/tracks.mp3',
  _id: 1
}
  constructor() { }

  ngOnInit(): void {
  }

}
