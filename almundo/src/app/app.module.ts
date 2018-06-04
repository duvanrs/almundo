import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FiltersComponent } from './components/filters/filters.component';
import { HotelsComponent } from './components/hotels/hotels.component';

import {HotelsService} from './service/hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FiltersComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule ,
    FormsModule       
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
