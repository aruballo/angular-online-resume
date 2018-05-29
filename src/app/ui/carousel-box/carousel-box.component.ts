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

  ngOnInit() {
    this.neighborhoodAppPic = 'assets/img/neighborhood-app.png';
    this.gwentPic = 'assets/img/gwent.png';
    this.ladyBugPic = 'assets/img/radioactive-ladybugs.png';

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
