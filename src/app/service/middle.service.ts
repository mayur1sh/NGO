import { Injectable } from '@angular/core';
import { MasterService } from './master.service';

@Injectable()
export class MiddleService {

  constructor(private _Service: MasterService) {
  }
  SendEmail(data:any){
    return this._Service.Post("Admin/SendEmail",data);
  }
}





