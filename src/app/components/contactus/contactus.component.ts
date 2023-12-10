import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { MiddleService } from 'app/service/middle.service';

@Component({
    selector: 'app-contactus.component',
    templateUrl: './contactus.component.html'
})
export class ContactUsComponent {
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
    constructor(private _MiddleService: MiddleService) { }
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
}
