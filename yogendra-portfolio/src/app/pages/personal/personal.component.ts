import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  lifePillars: any[] = [];
  lifeJourney: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Get life pillars data
    this.lifePillars = this.dataService.getLifePillars();
    
    // Get life journey data
    this.lifeJourney = this.dataService.getLifeJourney();
  }
}
