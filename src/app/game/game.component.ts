import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
