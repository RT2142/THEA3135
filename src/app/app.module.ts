import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { PostComponent } from './post/post.component';
import {DateAdapter } from 'angular-calendar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CalendComponent } from './calend/calend.component';
import {MatCardModule} from '@angular/material/card';
import { HammerModule } from '@angular/platform-browser';
import { IgxCalendarModule } from 'igniteui-angular';
import { IgxDialogModule } from "igniteui-angular";
import { FullCalendarModule } from '@fullcalendar/angular';
import { InfoTableComponent } from './info-table/info-table.component';
import { FormComponent } from './form/form.component';
import { ActInfoComponent } from './act-info/act-info.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PDOCSComponent } from './p-docs/p-docs.component';
import { PDownComponent } from './p-down/p-down.component';
import { DownloadFileService } from './download-file.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AnnouncementsComponent,
    PostComponent,
    CalendComponent,
    InfoTableComponent,
    FormComponent,
    ActInfoComponent,
    PDOCSComponent,
    PDownComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    IgxCalendarModule,
    IgxDialogModule,
    FullCalendarModule,
    MatDialogModule,
    HttpClientModule,
  ],
  providers: [DownloadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
