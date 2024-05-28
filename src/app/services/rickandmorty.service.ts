import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RickandmortyService {

  constructor(
    private http: HttpClient
  ) {

  }

    public getCharacter(){
      return this.http.get('https://rickandmortyapi.com/api/character')
    }

    public getEpisode(){
      return this.http.get('https://rickandmortyapi.com/api/episode')
    }

    public getLocation(){
      return this.http.get('https://rickandmortyapi.com/api/location')
    }

    public getCharacterById(id: number){
      return this.http.get('https://rickandmortyapi.com/api/character/${id}')
    }


}
