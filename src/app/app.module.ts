import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './ui/main/app.component';
import { InfoSnapshotComponent } from './ui/info-snapshot/info-snapshot.component';
import { ContactInfoComponent } from './ui/contact-info/contact-info.component';
import { WorkHistoryComponent } from './ui/work-history/work-history.component';
import { EducationInfoComponent } from './ui/education/education-info.component';
import { ProjectsInfoComponent } from './ui/projects/projects-info.component';
import { CarouselBoxComponent } from './ui/carousel-box/carousel-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselBoxComponent,
    ContactInfoComponent,
    EducationInfoComponent,
    InfoSnapshotComponent,
    ProjectsInfoComponent,
    WorkHistoryComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
