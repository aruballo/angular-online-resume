import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'carousel-box',
  templateUrl: './carousel-box.component.html',
  styleUrls: ['./carousel-box.component.scss']
})
export class CarouselBoxComponent implements OnInit {
  public neighborhoodAppPic: string;
  public gwentPic: string;
  public ladyBugPic: string;
  public box: HTMLElement;
  public items: NodeListOf<Element>;
  public counter: number;
  public current: Element;
  public amount: number;
  public gwentPicSrcSet: string;
  public gwentPicSizes: string;
  public neighborhoodAppPicSrcSet: string;
  public neighborhoodAppPicSizes: string;
  public ladyBugPicSrcSet: string;
  public ladyBugPicSizes: string;

  ngOnInit() {
    this.neighborhoodAppPic = 'assets/img/neighborhood-app.jpg';
    this.gwentPic = 'assets/img/gwent.jpg';
    this.ladyBugPic = 'assets/img/radioactive-ladybugs.png';

    this.gwentPicSrcSet = "assets/img/gwent-960.png 960w, assets/img/gwent.jpg 1920w";
    this.gwentPicSizes = "(max-width: 1585px) 960px, (min-width: 1586px) 1512px";

    this.neighborhoodAppPicSrcSet = "assets/img/neighborhood-app-960.png 960w, assets/img/neighborhood-app.jpg 1920w";
    this.neighborhoodAppPicSizes = "(max-width: 1585px) 960px, (min-width: 1586px) 1512px";

    this.box = document.querySelector('.carouselbox');
    this.items = this.box.querySelectorAll('.content li');
    this.counter = 0;
    this.amount = this.items.length;
    this.current = this.items[0];
    this.box.classList.add('active');
    this.navigate(0);
  }

  public navigate(direction) {
    this.current.classList.remove('current');
    this.counter = this.counter + direction; 
    if (direction === -1 && 
        this.counter < 0) { 
      this.counter = this.amount - 1; 
    }
    if (direction === 1 && 
        !this.items[this.counter]) { 
      this.counter = 0;
    }
    this.current = this.items[this.counter];
    this.current.classList.add('current');
  }
}
