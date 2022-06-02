import {Component, Input, OnInit} from '@angular/core';
import {Games} from '../../models/games';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
   @Input() sliderConfig;
   @Input() games: Games;
   @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
