import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType{
  all = '',
  song = 'song',
  video = 'video'
}

@Injectable({
  providedIn: 'root'
})
export class StreamingService {
  url='https://www.googleapis.com/youtube/v3';
  apiKey='AIzaSyBHzE9oZSgKqwghzjsjSjjPz_UHOrTg4q0';

  constructor(private http: HttpClient) { }

  //Muestra los resultados de una busqueda
  SearchData(name: string, type: SearchType): Observable<any>{
    //posible error
    return this.http.get(`${this.url}?s=${encodeURI('')}&type={type}&apiKey=${this.apiKey}`)
    .pipe(
      map(results => {
      console.log('RAW: ', results);
      return results['Search'];
      })
    );
  }

  getDetails(id){
    return this.http.get(`${this.url}?i=${id}&plot=full&apiKey=${this.apiKey}`);
  }
  
}
