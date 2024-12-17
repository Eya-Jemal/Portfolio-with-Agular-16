// src/app/projects/projects.component.ts

import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects: any[] = [];  // Déclare une variable pour stocker les projets
  isLoading = true;     // Indicateur de chargement
  errorMessage = '';    // Message en cas d'erreur
  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    // Appelle le service pour récupérer les projets dès que le composant est initialisé
    this.projectService.getProjects().subscribe(
      (data) => {
        this.projects = data;  // Stocke les projets récupérés dans la variable
        this.isLoading = false;

      },
      (error) => {
        console.error('Erreur de récupération des projets', error);
        this.errorMessage = 'Une erreur s\'est produite lors du chargement des projets.';
        this.isLoading = false;
      }
    );
  }

}
