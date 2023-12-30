import { Component, OnInit } from '@angular/core';
import { Song } from '../../model/song.model';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrl: './song-list.component.scss'
})
export class SongListComponent implements OnInit {
  songs: Song[] = [];

  constructor(private songService: SongService) {}

  ngOnInit(): void {
    this.loadSongs();
  }

  loadSongs(): void {
    this.songService.getSongs().subscribe(songs => {
      this.songs = songs;
    });
  }

  deleteSong(songId: number): void {
    this.songService.deleteSong(songId).subscribe(() => {
      this.loadSongs(); // Rechargez la liste après la suppression
    });
  }
  addSong(newSong: Song): void {
    this.songs.push(newSong);
   }

}
