import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout'; 
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesListComponent } from './movie/movies-list/movies-list.component';
import { MaterialModule } from './material/material.module';
import { CreateMovieComponent } from './movie/create-movie/create-movie.component'; 
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DeleteMovieComponent } from './movie/delete-movie/delete-movie.component'; 
import { TitlePipe } from './title.pipe';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    CreateMovieComponent,
    DeleteMovieComponent, 
    TitlePipe, HeaderComponent, FooterComponent
  ],
  entryComponents: [
    CreateMovieComponent,
    DeleteMovieComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
