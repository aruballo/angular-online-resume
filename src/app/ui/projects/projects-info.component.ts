import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'projects-info',
  templateUrl: './projects-info.component.html',
  styleUrls: ['./projects-info.component.scss']
})
export class ProjectsInfoComponent implements OnInit {
  public udacityHeaderTitle: string;
  public udacityHeaderIcon: string;
  public udacityHeaderColor: string;
  public udacityTitle: string;
  public udacitySubtitle: string;
  public udacityDuration: string;
  public udacityImage: string;
  public udacityContent: string[];

  public uciHeaderTitle: string;
  public uciHeaderIcon: string;
  public uciHeaderColor: string;
  public uciTitle: string;
  public uciSubtitle: string;
  public uciDuration: string;
  public uciImage: string;
  public uciContent: string[];

  ngOnInit() {
    this.udacityHeaderTitle = "Education";
    this.udacityHeaderIcon = "card_membership";
    this.udacityHeaderColor = "primary";
    this.udacityTitle = "Udacity";
    this.udacitySubtitle = "Front End Web Developer Nanodegree";
    this.udacityDuration = "September 2016";
    this.udacityImage = "assets/img/udacity_logo.png"
    this.udacityContent = [
      "Extensive paid online web course covering the many different aspects of Front End Web Development"
    ];

    this.uciTitle = "University of California, Irvine";
    this.uciSubtitle = "Computer Science and Engineering, B.S.";
    this.uciDuration = "June 2012";
    this.uciImage = "assets/img/uci-logo.png"
    this.uciContent = [
      "4 year joint degree school program combining both Computer Science and Computer Engineering degrees"
    ];
  }
}
