import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppTableComponent } from './app-table/app-table.component';
import { AppRowComponent } from './app-row/app-row.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTableComponent,
    AppRowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
