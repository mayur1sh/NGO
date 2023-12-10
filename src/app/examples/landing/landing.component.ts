import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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

  constructor(private _MiddleService: MiddleService, private modalService: NgbModal) { }

  ngOnInit() {
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
    //this.DonationModal();
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }
  SubmitForm() {
    let data = {
      Name: this.Name,
      Email: this.Email,
      Mobile: this.Mobile,
      Message: this.Message
    }
    this._MiddleService.SendEmail(data).subscribe(res => {
      //console.log(res)
      if (res.Status == "1") {
        this.RestForm();
      }
      else {

      }
    });
  }
  RestForm() {
    this.Name = null;
    this.Email = null;
    this.Mobile = null;
    this.Message = null;
  }
  DonationModal() {
    var Html = `<ng-template #classic let-c="close" let-d="dismiss">
    <div class="modal-header justify-content-center">
        <button type="button" class="close" (click)="d('Cross click')">
            <i class="now-ui-icons ui-1_simple-remove"></i>
        </button>
        <h4 class="title title-up">Modal title</h4>
    </div>
    <div class="modal-body">
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
        </p>
    </div>
    <div class="modal-footer">
        <button type="button" class="btn btn-default">Nice Button</button>
        <button type="button" class="btn btn-danger" (click)="c('Close click')">Close</button>
    </div>
</ng-template>`;
    this.modalService.open(Html).result.then((result) => {

    }, (reason) => {

    });
  }
}
