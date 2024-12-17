import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router'; // Nécessaire pour les routes et routerLink
import { FormsModule } from '@angular/forms';
import { DetailComponent } from './about/detail/detail.component'; // Ajout du FormsModule
import { HttpClientModule } from '@angular/common/http';
import { ResumeComponent } from './about/resume/resume.component';
import { ResumepageComponent } from './resumepage/resumepage.component';

@NgModule({
  declarations: [
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    HomeComponent,
    ContactComponent,
    DetailComponent,
    ResumeComponent,
    ResumepageComponent
  ],
  imports: [
    CommonModule,
    FormsModule, // Nécessaire pour ngForm
    HttpClientModule,
    RouterModule // Pour activer le routing dans les composants
  ],
  exports: [
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    HomeComponent,
    ContactComponent
  ]
})
export class PortfolioModule { }
