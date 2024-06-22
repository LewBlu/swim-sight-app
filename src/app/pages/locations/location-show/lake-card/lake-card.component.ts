import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWater } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lake-card',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './lake-card.component.html',
  styleUrl: './lake-card.component.scss'
})
export class LakeCardComponent {
  public faWater = faWater;
}
