import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RickandmortyService {
  constructor(private http: HttpClient) {}

  public getCharacter() {
    return this.http.get('https://rickandmortyapi.com/api/character');
  }

  public getEpisode() {
    return this.http.get('https://rickandmortyapi.com/api/episode');
  }

  public getLocation() {
    return this.http.get('https://rickandmortyapi.com/api/location');
  }

  public getCharacterById(id: number) {
    return this.http.get('https://rickandmortyapi.com/api/character/${id}');
  }

  public getEpisodeById(id: number) {
    return this.http.get('https://rickandmortyapi.com/api/episode/${id}');
  }

  public getPokemon() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon');
  }
  public getPokemonById(id: number) {
    return this.http.get('https://pokeapi.co/api/v2/pokemon/${id}');
  }
}
