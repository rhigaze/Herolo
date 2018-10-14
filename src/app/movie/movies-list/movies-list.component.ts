import { Component, OnInit } from '@angular/core';
import { DataService } from './../../data.service';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { CreateMovieComponent } from './../create-movie/create-movie.component'; 
import { DeleteMovieComponent } from './../delete-movie/delete-movie.component';
import { trigger, state, style, animate, transition} from '@angular/animations';
 
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
  animations: [
    trigger('fadeIn',[ 
      transition('void => *',[
        style({opacity:0}),
        animate(3000  )
      ]),
      transition('* => void',[ 
        animate(3000,style({opacity:0,background:'black'}) )
      ])
    ]),
    
  ]
})

export class MoviesListComponent implements OnInit {
  movies:any = [];
  hover = false; 
  outInAnimation = 'x';
  constructor(private service:DataService,
              public dialog: MatDialog) { }
  

  ngOnInit() {
    this.service.getMovies()
    this.service.getUpdatesMovies().subscribe(data =>{
      this.movies = data
      console.log("The data is ", this.movies);
    })
  }
  editMovie(id:string): void { 
    const dialogRef = this.dialog.open(CreateMovieComponent, {
      width: '65%',
      data: {ID: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ',result); 
    });
  }
  addMovie(): void { 
    const dialogRef = this.dialog.open(CreateMovieComponent, {
      width: '65%',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ',result); 
    });
  }
  deleteMovie(id:string): void { 
    const dialogRef = this.dialog.open(DeleteMovieComponent, {
      width: '85%',
      data: {ID: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed ',result); 
      
    });
  }
}
