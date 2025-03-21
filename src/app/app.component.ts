import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';
import { DocumentsComponent } from './documents/documents.component';
import { FoundersComponent } from './founders/founders.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    HeaderComponent, 
    FooterComponent, 
    MainComponent, 
    NewsComponent, 
    EventsComponent, 
    AcknowledgmentComponent, 
    DocumentsComponent,
    FoundersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-cdt';
}
