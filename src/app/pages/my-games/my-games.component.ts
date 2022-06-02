import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Games } from 'src/app/models/games';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-my-games',
  templateUrl: './my-games.component.html',
  styleUrls: ['./my-games.component.scss']
})
export class MyGamesComponent implements OnInit {

  games$: Observable<Games>;
  sliderConfig = {
    slidesToShow: 9,
    slidesToScroll: 2,
    arrows: true,
    autoplay: true
  };

  headerBGUrl: string;

  constructor(
    private gameService: GameService
  ) { }

  ngOnInit() {
    this.games$ = this.gameService.getMyGames();
  }

}
