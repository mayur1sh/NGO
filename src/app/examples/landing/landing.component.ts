import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MiddleService } from 'app/service/middle.service';
import * as Rellax from 'rellax';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  data: Date = new Date();
  focus;
  focus1;
  focus2;

  Name: string;
  NameFormControl = new FormControl([Validators.required]);
  Mobile: string;
  MobileFormControl = new FormControl([Validators.required]);
  Email: string;
  EmailFormControl = new FormControl([Validators.required]);
  Message: string;
  MessageFormControl = new FormControl([Validators.required]);

  constructor(private _MiddleService:MiddleService) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  SubmitForm() {
    let data = {
      Name:this.Name,
      Email:this.Email,
      Mobile:this.Mobile,
      Message:this.Message
    }
    this._MiddleService.SendEmail(data).subscribe(res=>{
      console.log(res)
      if(res.Status=="1"){
        this.RestForm();
      }
      else{

      }
    });
  }
  RestForm(){
    this.Name=null;
    this.Email=null;
    this.Mobile=null;
    this.Message=null;
  }
}
