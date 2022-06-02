import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { Games } from 'src/app/models/games';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  sticky = false;
  subs: Subscription[] = [];
  trending: Games;

  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true
  };

  @ViewChild('stickHeader') header: ElementRef;
  headerBGUrl: string;

  constructor(private movie: GameService) {
  }

  ngOnInit(): void {
    this.subs.push(this.movie.getTrending().subscribe(data => {
      console.log('data', data);
      this.trending = data;
      this.headerBGUrl = this.trending.results.length > 0 ? this.trending.results[0].posterPath : null;
    }));
  }

  ngOnDestroy(): void {
    this.subs.map(s => s.unsubscribe());
  }

}
