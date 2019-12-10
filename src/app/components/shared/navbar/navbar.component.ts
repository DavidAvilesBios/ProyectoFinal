import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router , private auth: AuthService) { 
  }
     
  ngOnInit() {
  }

  salir() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
