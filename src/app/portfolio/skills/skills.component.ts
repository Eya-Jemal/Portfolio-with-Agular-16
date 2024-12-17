import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Angular', level: 80 },
    { name: 'TypeScript', level: 75 },
    { name: 'HTML & CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
  ];
}
