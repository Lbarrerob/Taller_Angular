import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';
import { SerieService } from '../Serie.service';

@Component({
  selector: 'app-Serie-list',
  templateUrl: './Serie-list.component.html',
  styleUrls: ['./Serie-list.component.css']
})

export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  getSeries(){
    this.serieService.getSeries().subscribe(series=>{
        this.series=series;
    })
  }
  get promedioTemporadas(): number {
    if (this.series.length === 0) return 0;  
    const totalTemporadas = this.series.reduce((sum, serie) => sum + serie.temporadas, 0);
    return totalTemporadas / this.series.length;
  }

  ngOnInit() {
    this.getSeries();
  }

}
