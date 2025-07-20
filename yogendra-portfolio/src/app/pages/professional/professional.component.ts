import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss']
})
export class ProfessionalComponent implements OnInit {
  professionalJourney: any[] = [];
  projects: any[] = [];
  skills: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Get professional journey data
    this.professionalJourney = this.dataService.getProfessionalJourney();
    
    // Get projects data
    this.projects = this.dataService.getProjects();
    
    // Get skills data
    this.skills = this.dataService.getTechSkills();
  }
}
