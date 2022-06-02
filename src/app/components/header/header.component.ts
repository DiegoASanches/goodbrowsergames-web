import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Games } from 'src/app/models/games';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() showBanner: boolean = false;
  @Input() headerBGUrl: string;
  @Input() trending: Games;

  sticky: boolean = false;
  @ViewChild('stickHeader') header: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  // tslint:disable-next-line:typedef
  handleScroll() {
    const windowScroll = window.pageYOffset;

    if (windowScroll >= this.header.nativeElement.offsetHeight) {
      this.sticky = true;
    } else {
      this.sticky = false;
    }
  }

}
