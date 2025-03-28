import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewsComponent } from './news/news.component';
import { EventsComponent } from './events/events.component';
import { AcknowledgmentComponent } from './acknowledgment/acknowledgment.component';
import { DocumentsComponent } from './documents/documents.component';
import { FoundersComponent } from './founders/founders.component';
import { HelpsComponent } from './helps/helps.component';
import { ProgrammsComponent } from './programms/programms.component';
import { PartnersComponent } from './partners/partners.component';

export const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: 'news', component: NewsComponent },
    { path: 'events', component: EventsComponent },
    { path: 'acknowledgment', component: AcknowledgmentComponent },
    { path: 'documents', component: DocumentsComponent },
    { path: 'founders', component: FoundersComponent },
    { path: 'help', component: HelpsComponent },
    { path: 'programms', component: ProgrammsComponent },
    { path: 'partners', component: PartnersComponent },
    { path: '**', component: MainComponent }
    ];
