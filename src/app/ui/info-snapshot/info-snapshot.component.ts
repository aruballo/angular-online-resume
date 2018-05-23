import { Component, Input } from '@angular/core';

@Component({
  selector: 'info-snapshot',
  templateUrl: './info-snapshot.component.html',
  styleUrls: ['./info-snapshot.component.scss']
})
export class InfoSnapshotComponent {
  @Input() cardHeaderTitle: string;
  @Input() cardHeaderIcon: string;
  @Input() cardTitle: string;
  @Input() cardSubtitle: string;
  @Input() cardDuration: string;
  @Input() cardContent: string;
  @Input() cardImage: string;
  @Input() cardColor: string;
}
