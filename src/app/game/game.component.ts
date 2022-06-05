import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  title: string = "";
  cover: string = "https://i.imgur.com/2VcvwBZ.png";
  yourRating: string = "";
  description: string = "";
  gbgRating: string = "5.0";
  profilePicture: string = "https://i.imgur.com/ZsJTb3r.png";

  gameId: string;

  constructor(private route: ActivatedRoute, private service: GameService) {
    // get the :id from the route
    this.route.params.subscribe(params => {
      this.gameId = params.id;
    });
  }

  ngOnInit(): void {
    this.service.getOneGame(this.gameId).subscribe(data => {
      this.title = data.title;
      this.gbgRating = String(data.voteCount);
      this.cover = data.posterPath || this.cover;
      this.description = data.overview;
    });
  }

}
