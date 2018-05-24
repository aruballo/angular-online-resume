import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatMenuModule, MatToolbarModule, MatIconModule, MatGridListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './ui/main/app.component';
import { InfoSnapshotComponent } from './ui/info-snapshot/info-snapshot.component';
import { ContactInfoComponent} from './ui/contact-info/contact-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactInfoComponent,
    InfoSnapshotComponent
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
