import {Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
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

  environment = environment;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onClick(m: any) {
    this.router.navigate(['/game', m?._id]);
  }

}
