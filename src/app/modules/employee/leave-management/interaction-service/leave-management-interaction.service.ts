import { LeaveRequest } from './../../../../models/leave-management/leave-request';
import { Subject } from 'rxjs/internal/Subject';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/leave-management/user';

@Injectable({
  providedIn: 'root'
})
export class LeaveManagementInteractionService {

  constructor() { }

  private user = new Subject<User>();
  private leaveId = new Subject<number>();
  private msg = new Subject<string>();
  private leaveRequest = new Subject<LeaveRequest>();
  private cancelRequestId = new Subject<number>();

  user$ = this.user.asObservable();
  leaveId$ = this.leaveId.asObservable();
  msg$ = this.msg.asObservable();
  leaveRequest$ = this.leaveRequest.asObservable();
  cancelRequestId$ = this.cancelRequestId.asObservable();

  sendUserId(user: User) {
    this.user.next(user);
  }

  setLeaveId(leaveId: number) {
    this.leaveId.next(leaveId);
  }

  sendSuccessMsg(msg: string) {
    this.msg.next(msg);
  }

  sendLeaveRequest(leaveRequest: LeaveRequest) {
    this.leaveRequest.next(leaveRequest);
  }

  sendCancelRequestId(cancelRequestId: number){
    this.cancelRequestId.next(cancelRequestId);
  }
}
