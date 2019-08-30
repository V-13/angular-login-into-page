import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getUname='';
  getUpass='';

  constructor(private router:Router) { }

  onSubmit(data:NgForm)
  {
    console.log(data.value);
    this.getUname = data.value.uname;
    this.getUpass = data.value.upass;

   

    if(this.getUname == "admin" && this.getUpass == "1234" )
    {
       localStorage.setItem('loggedin','true');
       this.router.navigateByUrl('welcome')


      alert('Login Success');
      console.log('login success')
      console.log
    }
    else{
      alert('access denied')
      console.log('not success')
    }
  }

  ngOnInit() {
  }

}