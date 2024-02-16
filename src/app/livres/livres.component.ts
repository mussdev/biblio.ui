import { Component, OnInit, inject } from '@angular/core';
import { livre } from '../types/livre';
import { Observable } from 'rxjs';
import { LivresService } from '../services/livres.service';
import { response } from 'express';

@Component({
  selector: 'app-livres',
  standalone: true,
  imports: [],
  templateUrl: './livres.component.html',
  styleUrl: './livres.component.css'
})
export class LivresComponent implements OnInit{

  livre!:Observable<livre[]>
  livreService = inject(LivresService);

  ngOnInit(): void {
    
    this.livreService.getLivres().subscribe({
      next:(response)=>{
        console.log(response);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }



}
