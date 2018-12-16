import { LeaveRequestService } from './../../../../../../services/leave-management/leave-request.service';
import { LeaveManagementInteractionService } from './../../../interaction-service/leave-management-interaction.service';
import { Component, OnInit } from '@angular/core';
import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { TokenStorageService } from 'src/app/services/login/token-storage.service';

@Component({
  selector: 'app-request-conform-modal',
  templateUrl: './request-conform-modal.component.html',
  styleUrls: ['./request-conform-modal.component.css']
})
export class RequestConformModalComponent implements OnInit {

  info: any;
  leaveRequest: LeaveRequest = new LeaveRequest();

  constructor(
    private interactionService: LeaveManagementInteractionService,
    private leaveRequestService: LeaveRequestService,
    private token: TokenStorageService
  ) { }

  ngOnInit() {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
    this.getLeaveRequest();
  }

  getLeaveRequest() {
    this.interactionService.leaveRequest$.subscribe(data => {
      this.leaveRequest = data;
    })
  }

  addLeaveRequest() {
    this.leaveRequest.userName = this.info.username;
    this.leaveRequestService.addLeaveRequest(this.leaveRequest).subscribe(data => {
      this.resetLeaveRequest();
      this.interactionService.sendSuccessMsg("leaveRequestSent");
    })
  }

  resetLeaveRequest() {
    this.leaveRequest.leaveAllocation = null;
    this.leaveRequest = null;
  }
}
