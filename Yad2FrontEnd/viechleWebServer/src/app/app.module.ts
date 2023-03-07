import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ContentComponent } from './components/content/content.component';

import { FormsModule } from '@angular/forms';
import { ViechlesComponent } from './components/viechles/viechles.component';



@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ViechlesComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
