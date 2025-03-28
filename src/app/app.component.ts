import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';
import { DocumentsComponent } from './documents/documents.component';
import { FoundersComponent } from './founders/founders.component';
import { HelpsComponent } from './helps/helps.component';
import { ProgrammsComponent } from './programms/programms.component';
import { PartnersComponent } from './partners/partners.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, 
    HeaderComponent, 
    FooterComponent, 
    MainComponent, 
    NewsComponent, 
    EventsComponent, 
    AcknowledgmentComponent, 
    DocumentsComponent,
    FoundersComponent,
    HelpsComponent,
    ProgrammsComponent,
    PartnersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-cdt';
}
