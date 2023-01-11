import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActInfoComponent } from './act-info/act-info.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { CalendComponent } from './calend/calend.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { InfoTableComponent } from './info-table/info-table.component';
import { PDOCSComponent } from './p-docs/p-docs.component';
import { PDownComponent } from './p-down/p-down.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Annoucements', component: AnnouncementsComponent },
  {path: 'Calend', component: CalendComponent},
  {path: 'Form', component: FormComponent},
  {path: 'contactInfo', component:InfoTableComponent},
  {path: 'actInfo', component:ActInfoComponent},
  {path: 'secPages', component:PDOCSComponent},
  {path: 'pDown', component:PDownComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
