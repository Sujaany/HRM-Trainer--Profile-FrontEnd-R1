import { LeaveRequest } from './../../../../../../../models/leave-management/leave-request';
import { LeaveManagementInteractionService } from './../../../../interaction-service/leave-management-interaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-leave-details',
  templateUrl: './view-leave-details.component.html',
  styleUrls: ['./view-leave-details.component.css']
})
export class ViewLeaveDetailsComponent implements OnInit {

  leaveRequest: LeaveRequest = new LeaveRequest();

  constructor(
    private interactionService: LeaveManagementInteractionService,
  ) { }

  ngOnInit() {
    this.getLeaveRequest();
  }

  getLeaveRequest() {
    this.interactionService.leaveRequest$.subscribe(data =>{
      this.leaveRequest = data;
    })
  }
}
