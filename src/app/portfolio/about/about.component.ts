import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from 'src/app/project.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  portfolioData: any[] = []; // Array to hold the portfolio data

  constructor(private ProjectService: ProjectService) {}

  ngOnInit(): void {
    this.ProjectService.getPortfolioData().subscribe(data => {
      this.portfolioData = data; // Store fetched data into portfolioData array
    });
  }
  
  details = [
    {
      title: 'Biographie',
      description: 'Développeur passionné avec X années d’expérience dans le développement web et mobile. Amoureux des technologies modernes et de l’apprentissage continu.',
      icon: 'fa fa-user', // Exemple d'icône
      link: 'https://moncv.com/biographie'
    },
    {
      title: 'Certifications',
      description: 'Certifié Angular Developer, Google Cloud Associate, et plus.',
      icon: 'fa fa-certificate',
      link: 'https://moncv.com/certifications'
    },
    {
      title: 'Expérience professionnelle',
      description: 'Travail dans des entreprises reconnues pour développer des applications performantes et scalables.',
      icon: 'fa fa-briefcase',
      link: 'https://linkedin.com/in/votreprofil'
    }
  ];

  private scrollInterval: any;

 

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }

  private startAutoScroll(): void {
    const list = document.getElementById('portfolio-list');

    if (list) {
      const itemWidth = list.firstElementChild?.clientWidth || 200; // Width of one <li> (default fallback 200px)

      this.scrollInterval = setInterval(() => {
        const maxScroll = list.scrollWidth - list.clientWidth;

        // Scroll to the next item
        if (list.scrollLeft >= maxScroll) {
          list.scrollLeft = 0; // Reset to the start
        } else {
          list.scrollLeft += itemWidth; // Scroll by the width of one item
        }
      }, 1000); // Faster scrolling: Every 1 second
    }
  }

  pauseScroll(): void {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }
  
  resumeScroll(): void {
    this.startAutoScroll();
  }

}
