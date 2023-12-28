import { Component, HostListener } from '@angular/core';
import { PicsService } from '../services/pics.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-images',
  templateUrl: './list-images.component.html',
  styleUrls: ['./list-images.component.css']
})
export class ListImagesComponent {

  suscription: Subscription;
  listPics: any[] = [];
  apart: string;
  selectedPic: any = {};
  
  constructor(private _picsService: PicsService, private route: ActivatedRoute){
    this.apart = route.snapshot.paramMap.get('valor')!;
    console.log(this.apart);
  
    this.suscription = this._picsService.getImagenesByApart(this.apart).subscribe(data => {
      console.log(data);
      if(data.length === 0) {
        this._picsService.setError('Ups, no encontramos ningun resultado :v');
        return;
      }
      
      this.listPics = data;
    }, error => {
      this._picsService.setError('Ups, ocurrió un error XO');
    })

  }

  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave hacia arriba
    });
  }

  showImage(image: any){
    console.log(image);
    this.selectedPic = image;
  }

}
