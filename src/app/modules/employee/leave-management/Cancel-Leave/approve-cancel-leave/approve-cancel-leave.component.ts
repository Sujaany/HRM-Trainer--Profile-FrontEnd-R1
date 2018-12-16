import { LeaveRequest } from 'src/app/models/leave-management/leave-request';
import { LeaveType } from './../../../../../models/leave-management/leave-type';
import { LeaveManagementInteractionService } from './../../interaction-service/leave-management-interaction.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Cancel } from 'src/app/models/leave-management/cancel';
import { CancelRequestService } from './../../../../../services/leave-management/cancel-request.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-approve-cancel-leave',
  templateUrl: './approve-cancel-leave.component.html',
  styleUrls: ['./approve-cancel-leave.component.css']
})
export class ApproveCancelLeaveComponent implements OnInit {

  displayedColumns: string[] = ['name', 'requestId', 'department', 'type', 'reason', 'accept/reject'];

  cancelLeaveRequest: Cancel[];

  dataSource = new MatTableDataSource<any>(this.cancelLeaveRequest);


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private cancelRequestService: CancelRequestService,
    private interactionService: LeaveManagementInteractionService
  ) { }

  ngOnInit() {
    this.getPendingCancelLeaveRequest();
    this.getSuccessMsg();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getPendingCancelLeaveRequest() {
    this.cancelRequestService.getPendingCancelLeaveRequest().subscribe(data => {
      this.cancelLeaveRequest = data;
      this.dataSource = new MatTableDataSource<any>(this.cancelLeaveRequest);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  sendLeaveRequest(leaveRequest) {
    this.interactionService.sendLeaveRequest(leaveRequest);
  }

  sendCancelRequestId(cancelLeaveRequestId) {
    this.interactionService.sendCancelRequestId(cancelLeaveRequestId);
  }

  getSuccessMsg() {
    this.interactionService.msg$.subscribe(data => {
      if (data == "cancelRequestAccepted" || data == "cancelRequestRejected") {
        this.getPendingCancelLeaveRequest();
      }
    })
  }
}
