import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { DonorsComponent } from './donations/donors/donors.component';
import { DetailsComponent } from './donations/details/details.component';
import { HomeComponent } from './core/home/home.component';
import { TableComponent } from './donations/donors/table/table.component';
import { PaginationComponent } from './donations/donors/pagination/pagination.component';
import { SearchComponent } from './donations/donors/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    DonorsComponent,
    DetailsComponent,
    HomeComponent,
    TableComponent,
    PaginationComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
