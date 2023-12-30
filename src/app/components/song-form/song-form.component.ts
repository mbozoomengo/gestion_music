import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Song } from '../../model/song.model';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-song-form',
  templateUrl: './song-form.component.html',
  styleUrl: './song-form.component.scss'
})
export class SongFormComponent implements OnInit {
  songForm: FormGroup = this.fb.group({ // Initialisation lors de la déclaration
    title: ['', Validators.required],
    artist: ['', Validators.required],
    releaseDate: ['', Validators.required],
    lyrics: [''],
    url: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private songService: SongService) {}

  ngOnInit(): void {
    // Autre logique d'initialisation si nécessaire
  }

  onSubmit(): void {
    if (this.songForm.valid) {
      const newSong: Song = this.songForm.value;
      this.songService.addSong(newSong).subscribe(() => {
        this.songForm.reset();
      });
    }
  }

  updateSong(): void {
    if (this.songForm.valid) {
      const updatedSong: Song = this.songForm.value;
      this.songService.updateSong(updatedSong).subscribe(() => {
        this.songForm.reset();
      });
    }
  }
}
