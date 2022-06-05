import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  @Input() title: string = "FEZ";
  @Input() yourRating: string = "";
  @Input() gbgRating: string = "5.0";
  @Input() cover: string = "https://assets1.ignimgs.com/thumbs/userUploaded/2015/1/15/fez-title-1421351820022.jpg";
  @Input() profilePicture: string = "https://i.imgur.com/ZsJTb3r.png";
  @Input() description: string = "Ex sunt aliquip deserunt aliquip proident. Commodo irure ad anim dolor non ex adipisicing dolor commodo proident irure.";

  gameId: string;

  constructor(private route: ActivatedRoute) {
    // get the :id from the route
    this.route.params.subscribe(params => {
      this.gameId = params.id;
    });
  }

  ngOnInit(): void {
  }

}
