import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { KegListComponent } from './keg-list/keg-list.component';
import { EditKegComponent } from './edit-keg/edit-keg.component';
import { AddKegComponent } from './add-keg/add-keg.component';
import { RunningLowComponent } from './running-low/running-low.component';
import { RunningLowPipe } from './runninglow.pipe';
import { KegTypePipe } from './kegtype.pipe';
import { SortByComponent } from './sort-by/sort-by.component';


@NgModule({
  declarations: [
    AppComponent,
    KegListComponent,
    EditKegComponent,
    AddKegComponent,
    RunningLowPipe,
    RunningLowComponent,
    KegTypePipe,
    SortByComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
