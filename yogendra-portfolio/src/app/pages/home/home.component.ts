import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as AOS from 'aos';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  featuredProjects: any[] = [];
  skills: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Get featured projects (first 3)
    this.featuredProjects = this.dataService.getProjects().slice(0, 3);
    
    // Get skills
    this.skills = this.dataService.getTechSkills();
  }

  ngAfterViewInit(): void {
    // Initialize Typed.js
    const typed = new Typed('.typed-text', {
      strings: [
        'Angular Developer',
        'JavaScript Enthusiast',
        'Engineer with a Story'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });
  }
}
