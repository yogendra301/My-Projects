import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {
  musicCategories: any;
  entertainment: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // Get music categories data
    this.musicCategories = this.dataService.getMusicCategories();
    
    // Get entertainment categories data
    this.entertainment = this.dataService.getEntertainmentCategories();
  }
}
