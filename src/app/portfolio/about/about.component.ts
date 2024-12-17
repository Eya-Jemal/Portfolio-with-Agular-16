import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
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

  ngOnInit(): void {
    // Start the automatic scroll when the component is initialized
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }

  private startAutoScroll(): void {
    const list = document.getElementById('portfolio-list');

    if (list) {
      this.scrollInterval = setInterval(() => {
        const scrollAmount = 200; // Pixels to scroll
        const maxScroll = list.scrollWidth - list.clientWidth;

        // Check if we've reached the end; if so, scroll back to start
        if (list.scrollLeft >= maxScroll) {
          list.scrollLeft = 0;
        } else {
          list.scrollLeft += scrollAmount;
        }
      }, 3000); // Scroll every 3 seconds
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
