import {AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Subscription} from 'rxjs';
import {Games} from './models/games';
import {GameService} from './services/game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  trending: Games;
  popular: Games;
  topRated: Games;
  originals: Games;
  nowPlaying: Games;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: false
  };

  headerBGUrl: string;

  constructor(private movie: GameService) {
  }

  ngOnInit(): void {
    this.subs.push(this.movie.getTrending().subscribe(data => {
      this.trending = data;
      this.headerBGUrl = this.trending.results[0].posterPath;
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }


}
