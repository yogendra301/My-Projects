import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  
  ngOnInit(): void {
    // Initialize AOS (Animate on Scroll) once for the entire application
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
      startEvent: 'DOMContentLoaded'
    });
  }
}
