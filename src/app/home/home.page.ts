import { SearchType, StreamingService } from './../streaming.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit{

  results: Observable<any>;
  searchTerm: string = '';
  type: SearchType = SearchType.all;

  constructor(private musicService: StreamingService) {}

  ngOnInit(){
  }

  SearchChanged(){
    this.results = this.musicService.SearchData(this.searchTerm, this.type);
    console.log('Los Resultados:', this.results);
    this.results.subscribe(res =>{

    })
  }

}
