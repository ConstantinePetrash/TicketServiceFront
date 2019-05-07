import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HallComponent } from './components/hall/hall.component';
import { HallsComponent } from './components/halls/halls.component';

@NgModule({
  declarations: [
    AppComponent,
    HallComponent,
    HallsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
