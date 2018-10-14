import { Component, OnInit, Inject } from '@angular/core';
import { Movie } from './../../models/movie.model';
import { DataService } from './../../data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from "@angular/forms";

import { CustomValidator } from './../../validators/custom.validator';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css']
})

export class CreateMovieComponent implements OnInit {

  id:string;
  mode: string= 'create';
  movieObj =  new Movie();
  movieForm :FormGroup; 

  constructor(private formBuilder:FormBuilder,
              private service:DataService,
              public dialogRef: MatDialogRef<any>,
              @Inject(MAT_DIALOG_DATA) public data: string) { }


  ngOnInit() {

    if(this.data['ID']){
      this.id = this.data['ID'];
      this.mode = 'edit'; 
    }else{
      this.id = '';
    }
    this.getMovieObj();
    this.createForm();  
   }

  getMovieObj(){ 
    if(!this.id) 
      this.movieObj = new Movie(); 
    else{
      const data = this.service.getMovieById(this.id)  
      this.movieObj['imdbID'] = data['imdbID'];
      this.movieObj['Title']  = data['Title'];
      this.movieObj['Year']   = data['Year'];
      this.movieObj['Type']   = data['Type'];
      this.movieObj['Poster'] = data['Poster'];
    }
  }

   createForm(){
    
    this.movieForm = this.formBuilder.group({
      //id : [this.movieObj['imdbID'],[Validators.required]],
      title : [this.movieObj['Title'],[Validators.required, Validators.pattern(/^(?!\s*$)/g),CustomValidator.uniquTitleValidator(this.service,this.movieObj['imdbID'])]],
      year : [this.movieObj['Year'],[Validators.required, CustomValidator.dateValidator]] ,
      genre : [this.movieObj['Type'],Validators.required],
      poster : [this.movieObj['Poster'],Validators.required]
    });
  }
  get f() { return this.movieForm.controls; }
  save(){
    var Xmas = new Date(this.movieObj['Year']);
    this.movieObj['Year'] = Xmas.getFullYear() 
    if(this.mode ==='create'){ 
      this.service.addMovie(this.movieObj)
    }else if(this.mode =='edit'){
      this.service.editMovie(this.movieObj)
    }
    this.dialogRef.close()
  } 
}
