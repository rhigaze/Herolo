import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { DataService } from './../../data.service';
@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  id:string;
  movieObj:object;
  dialog_text:object;
  constructor( private service:DataService,
              public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
    if(this.data['ID']) {
      this.id = this.data['ID']; 
      console.log("this.id ",this.id);
      this.getMovieObj();
      
    }
    else this.dialogRef.close();
    
  }
  getMovieObj(){ 
    if(!this.id)  return '';
    //this.service.getMovies()
    this.movieObj  = this.service.getMovieById(this.id) 
       
    console.log("this.movieObj ",this.movieObj); 
  }
  _delete(){
    this.service.deleteMovie(this.id)
    console.log('confirm');
    this.dialogRef.close();
  }
  _cancel(){
    this.dialogRef.close();
  }
}
