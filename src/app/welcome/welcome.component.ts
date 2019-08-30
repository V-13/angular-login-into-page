import { Component, OnInit } from '@angular/core';

import{Router} from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
          status=JSON.parse(localStorage.getItem('loggedin'));
          console.log('In welcome page'+status);

          if(status ==="null"){
            console.log('fd');
            this.router.navigateByUrl('') //login page '' aayitataanu route cheythekane.
          }

  }
  logout(){
    localStorage.removeItem('loggedin');
    this.router.navigateByUrl('');
  }

}
