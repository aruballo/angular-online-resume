import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'info-snapshot',
  templateUrl: './info-snapshot.component.html',
  styleUrls: ['./info-snapshot.component.scss']
})
export class InfoSnapshotComponent implements OnInit{
  @Input() cardHeaderTitle: string;
  @Input() cardHeaderIcon: string;
  @Input() cardTitle: string;
  @Input() cardSubtitle: string;
  @Input() cardDuration: string;
  @Input() cardContent: string;
  @Input() cardImage: string;
  @Input() cardColor: string;
  @Input() cardSmall: boolean = false;
  @Input() cardMedium: boolean = false;

  public cardPicClasses: Object = {
    "card-pic": true
  }
  public cardPicDivClasses: object = {
    "card-pic-div": true
  }

  ngOnInit() {
    if (this.cardSmall) {
      this.cardPicDivClasses["card-pic-div-small-height"] = true;
      this.cardPicClasses["card-pic-small-max-height"] = true;
    } else if(this.cardMedium) {
      this.cardPicDivClasses["card-pic-div-medium-height"] = true;
      this.cardPicClasses["card-pic-default-max-height"] = true;
    } else {
      this.cardPicDivClasses["card-pic-div-default-height"] = true;
      this.cardPicClasses["card-pic-default-max-height"] = true;
    }
  }
}
