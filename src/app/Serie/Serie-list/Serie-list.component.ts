import { Component, OnInit } from '@angular/core';
import { Serie } from '../Serie';

@Component({
  selector: 'app-Serie-list',
  templateUrl: './Serie-list.component.html',
  styleUrls: ['./Serie-list.component.css']
})
export class SerieListComponent implements OnInit {

  series: Array<Serie> = [];
  constructor() { }

  ngOnInit() {
  }

}
