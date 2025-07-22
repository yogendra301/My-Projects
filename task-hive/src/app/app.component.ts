import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private authServ:AuthService)
  {

  }
ngOnInit(): void {
    this.authServ.setAuthFromStorage();  // Custom method if you need Subject update etc.
}
}
