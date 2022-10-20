import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
tracksTrending: Array<TrackModel> = []
tracksRandom: Array<TrackModel> = []

listObserver$:Array<Subscription> =[]
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
const observer1$ = this.trackService.dataTracksTrending$
.subscribe((response:any)  => {
this.tracksTrending = response
})
const observer2$ = this.trackService.dataTracksTrending$
.subscribe(response => {

})
this.listObserver$ = [observer1$,observer2$]
  }
  ngOndestroy(): void{
this.listObserver$.forEach(u => u.unsubscribe())
  }

}
