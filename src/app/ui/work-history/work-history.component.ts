import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.scss']
})
export class WorkHistoryComponent implements OnInit {
  public workHeaderTitle: string;
  public workHeaderColor: string;
  public workHeaderIcon: string;
  public loanDepotTitle: string;
  public loanDepotSubtitle: string;
  public loanDepotDuration: string;
  public loanDepotContent: string[];
  public loanDepotImage: string;

  public profoundTitle: string;
  public profoundSubtitle: string;
  public profoundDuration: string;
  public profoundContent: string[];
  public profoundImage: string;
  public profoundColor: string;

  public profoundTwoTitle: string;
  public profoundTwoSubtitle: string;
  public profoundTwoDuration: string;
  public profoundTwoContent: string[];
  public profoundTwoImage: string;
  public profoundTwoColor: string;

  ngOnInit() {
    this.workHeaderTitle = "Work History";
    this.workHeaderColor = "accent";
    this.workHeaderIcon = "work";
    this.loanDepotTitle = "loanDepot";
    this.loanDepotSubtitle = "Front End Web Developer";
    this.loanDepotDuration = "June 2017 - May 2018"
    this.loanDepotContent = [
      "Developed and published responsive front end enterprise application for 5000+ in-house loan officer team using Angular 2, Webpack, Bootstrap, Typescript and other front end libraries/utilities/frameworks.",
      "Maintained and expanded enterprise application as sole front end developer through the first month and a half of production release",
      "Assisted back end development team in transitioning into full stack development using pair programming to guide them through the Angular application and source",
      "Presented on unit testing with Karma and Jasmine to enforce unit testing and prevent regressions in the front end source code",
      "Worked with management to define a path for eventually transitioning into a full stack development role."
    ];
    this.loanDepotImage = "assets/img/loanDepot.jpg";

    this.profoundTitle = "Profound Logic Software";
    this.profoundSubtitle = "Software Developer";
    this.profoundDuration = "June 2015 - May 2017"
    this.profoundContent = [
      "Developed, modernized, tested and published large scale enterprise applications for customers using front end technologies such as Javascript, HTML5, and CSS3 alongside legacy back end languages using our proprietary Javascript framework.",
      "Published and maintained our mobile client application in the Android and iOS app stores using Cordova/Phonegap.",
      "Developed a mobile application for an industry conference that presented conference information such as attendees, speakers, time slots, etc.",
      "Authored unit tests for our Node.js framework that converted legacy backend code into Javascript."
    ];
    this.profoundImage = "assets/img/profoundlogo.png";

    this.profoundTwoTitle = "Profound Logic Software";
    this.profoundTwoSubtitle = "Support Engineer";
    this.profoundDuration = "June 2012 - June 2015"
    this.profoundTwoContent = [
      "Resolved customer issues and bugs in large front-end Javascript framework across all major browsers, with a range of 5-10 incoming issues per day.",
      "Assisted in the creation of new UI themes and elements for our in-broswer UI editor.",
      "Assisted in the migration and modernization of the company website."
    ];
    this.profoundTwoImage = "assets/img/profoundlogo.png";
  }
}
