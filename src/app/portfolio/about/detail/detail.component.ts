import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() detail: { 
    title: string; 
    description: string; 
    icon?: string; // Ajoutez des icônes pour chaque section
    link?: string; // Lien pour en savoir plus
  } = { title: '', description: '' };
}
