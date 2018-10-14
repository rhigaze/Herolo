import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from "rxjs";
import { Movie } from './models/movie.model';
import { map } from 'rxjs/operators';  
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "https://www.omdbapi.com/";
  private apikey = "3c1baca1"; 
  private movies: any[] = [];
  private moviesUpdated = new Subject<any[]>();
  constructor(private http:HttpClient) { }

  getMovies(){ 
    return this.http.get(this.url+"?apikey="+this.apikey+"&s=game&r=json")
    .subscribe(data =>{
      this.movies = data['Search'];
      this.moviesUpdated.next([...this.movies]);
    });      
  }
  titleIsExist(title:string,movieId:string){ 
    for (var index = 0; index < this.movies.length; index++) {
      var item = this.movies[index];
      if(item['Title'] === title && movieId !=item['imdbID'] )   { 
        console.log("Exist")
        return {"result": true}
      }
    }
    console.log("not Exist")
    return null;
  }
  getUpdatesMovies(){ 
    return this.moviesUpdated.asObservable();
  }
  getMovieById(id:string){
    //return this.http.get(this.url+"?apikey="+this.apikey+"&i="+id+"&r=json");
   
    for (var index = 0; index < this.movies.length; index++) {
      var item = this.movies[index];
      if(item['imdbID'] === id)   return item;
    }
     
    return null;
  }
  deleteMovie(id:string){ 
    this.movies.forEach( (item, index) => {
     if(item['imdbID'] === id) this.movies.splice(index,1);
    }); 
    this.moviesUpdated.next([...this.movies]);
  }
  editMovie(movie:object){
    this.movies.forEach( (item, index) => {
     if(item['imdbID'] === movie['imdbID']) this.movies[index] = movie;
    }); 
    this.moviesUpdated.next([...this.movies]);
  }
  addMovie(movie:Movie){
    console.log("new movie date :",movie['Year'])
    const id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    movie.imdbID = id; 
    this.movies.push(movie);
    this.moviesUpdated.next([...this.movies]);
  }
}
