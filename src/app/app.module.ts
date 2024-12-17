import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module'; 
import { PortfolioModule } from './portfolio/portfolio.module';
import { ResumeComponent } from './about/resume/resume.component'; // Importer PortfolioModule

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule, 
    PortfolioModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
