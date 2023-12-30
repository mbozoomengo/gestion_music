import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from '../model/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'http://localhost:3000/songs'; // Remplacez avec l'URL de votre API

  constructor(private http: HttpClient) {}

  // Récupérer la liste des chansons
  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.apiUrl);
  }

  // Ajouter une nouvelle chanson
  addSong(song: Song): Observable<Song> {
    return this.http.post<Song>(this.apiUrl, song);
  }

  // Mettre à jour une chanson existante
  updateSong(song: Song): Observable<Song> {
    const url = `${this.apiUrl}/${song.id}`; // Assurez-vous d'avoir une propriété 'id' dans votre modèle Song
    return this.http.put<Song>(url, song);
  }

  // Supprimer une chanson
  deleteSong(songId: number): Observable<void> {
    const url = `${this.apiUrl}/${songId}`;
    return this.http.delete<void>(url);
  }
}
